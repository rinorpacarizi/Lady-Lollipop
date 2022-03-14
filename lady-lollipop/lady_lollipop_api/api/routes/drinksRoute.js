import express from "express";
import sweetsController from "../controllers/drinksController";

const drinksRoute = express.Router();

drinksRoute.get("/list", drinksController.list);

drinksRoute.get("/:id", drinksController.get);

drinksRoute.post("/create", drinksController.post);

drinksRoute.put("/update", drinksController.put);

drinksRoute.put("/:id/uploadFile", drinksController.uploadFile);

drinksRoute.delete("/:id", drinksController.delete);

drinksRoute.put("/:sweetsId/removeFile/:filename", drinksController.deleteFile);

export default drinksRoute;
