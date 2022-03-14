import updateCakesSchema from "../../validatiors/updateCakesSchema";
import Cakes from "../models/Cakes";
import FileService from "../services/FIleService";

const cakesController = {
  list: async (req, res) => {
    const list = await Cakes.find();
    return res.json(list);
  },
  get: async (req, res) => {
    const { id } = req.query;
    const foundItem = await Cakes.find({ _id: id });

    return res.json(foundItem);
  },
  post: async (req, res) => {
    const cakesData = req.body;

    const newCakes = new Cakes(cakesData);
    await newCakes.save();
    return res.json(newCakes);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await Cakes.deleteOne({
        _id: id,
        // userId: req.authId
      });
      return res.json({ deleted: true });
    } catch (err) {}
  },
  put: async (req, res) => {
    const cakes = req.body;
    const validationResult = updatedCakesSchema.validate(cakes);

    if (validationResult.error) {
      return res.status(400).json({ error, message: "Failed to update" });
    }

    try {
      await Cakes.updateOne({ _id: updateProps.id }, updateProps);

      const updatedCake = Cakes.findOne({ _id: updateProps.id });

      return res.json(updatedCake);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
  deleteFile: async (req, res) => {
    const { cakeId, filename } = req.params;

    FileService.deleteFiles([filename]);

    const cakesData = await Cakes.findOne({ _id: cakeId }, { files: 1 });

    const updatedFilenames = cakesData.files
      .replace(`${filename};`, "")
      .replace(filename, "");

    await cakesData.updateOne(
      { _id: cakeId },
      {
        files: updatedFilenames,
      }
    );

    const updatedCakes = await Cakes.findOne(
      { _id: cakeId },
      {
        files: updatedFilenames,
      }
    );

    return res.json(updatedCakes);
  },
  uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      console.log("files - ", files);

      const cakes = await Cakes.find({ _id: id }, { files: 1 });
      const oldFiles = cakes.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await Cakes.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedCakes = await Cakes.find({ _id: id });
      return res.json(updatedCakes);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  },
};

export default cakesController;
