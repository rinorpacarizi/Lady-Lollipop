import updatedSweetsSchema from "../../validatiors/updateSweetsSchema";
import Sweets from "../models/Sweets";
import FileService from "../services/FIleService";

const sweetsController = {
  list: async (req, res) => {
    const list = await Sweets.find();
    return res.json(list);
  },
  get: async (req, res) => {
    const { id } = req.query;
    const foundItem = await Sweets.find({ _id: id });

    return res.json(foundItem);
  },
  post: async (req, res) => {
    const sweetsData = req.body;

    const newSweets = new Sweets(sweetsData);
    await newSweets.save();
    return res.json(newSweets);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await RealEstateModel.deleteOne({
        _id: id,
        // userId: req.authId
      });
      return res.json({ deleted: true });
    } catch (err) {}
  },
  put: async (req, res) => {
    const sweets = req.body;
    const validationResult=updatedSweetsSchema.validate(sweets);

      if(validationResult.error){
          return res.status(400).json({error,message:"Failed to update"});
      }

    try {
      await Sweets.updateOne(
        { _id: updateProps.id },
        updateProps
      ); 

      const updatedSweet =Sweets.findOne({_id:updateProps.id})

      return res.json(updatedSweet);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
  deleteFile: async (req, res) => {
    const { sweetsId, filename } = req.params;

    FileService.deleteFiles([filename]);

    const sweetsData = await Sweets.findOne(
      { _id: sweetsId },
      { files: 1 }
    );

    const updatedFilenames = sweetsData.files
      .replace(`${filename};`, "")
      .replace(filename, "");

    await sweetsData.updateOne(
      { _id: sweetsId },
      {
        files: updatedFilenames,
      }
    );

    const updatedSweets = await Sweets.findOne(
      { _id: sweetsId },
      {
        files: updatedFilenames,
      }
    );

    return res.json(updatedSweets);
  },
  uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      console.log("files - ", files);

      const sweets = await Sweets.find({ _id: id }, { files: 1 });
      const oldFiles = sweets.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await Sweets.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedSweets = await Sweets.find({ _id: id });
      return res.json(updatedSweets);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  },
};

export default sweetsController;