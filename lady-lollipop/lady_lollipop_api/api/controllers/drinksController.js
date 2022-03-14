import updatedDrinkSchema from "../../validatiors/updatDrinkSchema";
import Drinks from "../models/Drinks";
import FileService from "../services/FIleService";

const drinkController = {
  list: async (req, res) => {
    const list = await Drinks.find();
    return res.json(list);
  },
  get: async (req, res) => {
    const { id } = req.query;
    const foundItem = await Drinks.find({ _id: id });

    return res.json(foundItem);
  },
  post: async (req, res) => {
    const drinksData = req.body;

    const newDrinks = new Drinks(drinksData);
    await newDrinks.save();
    return res.json(newDrinks);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await Drinks.deleteOne({
        _id: id,
        // userId: req.authId
      });
      return res.json({ deleted: true });
    } catch (err) {}
  },
  put: async (req, res) => {
    const drinks = req.body;
    const validationResult = updatedDrinksSchema.validate(drinks);

    if (validationResult.error) {
      return res.status(400).json({ error, message: "Failed to update" });
    }

    try {
      await Drinks.updateOne({ _id: updateProps.id }, updateProps);

      const updatedDrink = Drinks.findOne({ _id: updateProps.id });

      return res.json(updatedDrink);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
  deleteFile: async (req, res) => {
    const { drinkId, filename } = req.params;

    FileService.deleteFiles([filename]);

    const drinksData = await Drinks.findOne({ _id: drinkId }, { files: 1 });

    const updatedFilenames = drinksData.files
      .replace(`${filename};`, "")
      .replace(filename, "");

    await drinksData.updateOne(
      { _id: drinkId },
      {
        files: updatedFilenames,
      }
    );

    const updatedDrinks = await Drinks.findOne(
      { _id: drinkId },
      {
        files: updatedFilenames,
      }
    );

    return res.json(updatedDrinks);
  },
  uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      console.log("files - ", files);

      const drinks = await Drinks.find({ _id: id }, { files: 1 });
      const oldFiles = drinks.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await Drinks.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedDrinks = await Drinks.find({ _id: id });
      return res.json(updatedDrinks);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  },
};

export default drinkController;
