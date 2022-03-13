import express from "express";
import sweetsController from "../controllers/sweetsController";

const sweetsRoute= express.Router();

sweetsRoute.get("/list",sweetsController.list);

sweetsRoute.get("/:id", sweetsController.get);

sweetsRoute.post("/create",sweetsController.post);

sweetsRoute.put("/update",sweetsController.put);

sweetsRoute.put("/:id/uploadFile", sweetsController.uploadFile);

sweetsRoute.delete("/:id", sweetsController.delete);

sweetsRoute.put(
  "/:sweetsId/removeFile/:filename",
  sweetsController.deleteFile
);


export default sweetsRoute;