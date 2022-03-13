import express from "express";
import userController from "../controllers/UserController";
import checkIfAuthenticated from "../middlewares/checkIfAuthenticated";

const userRouter = express.Router();

userRouter.post("/register", userController.register);

userRouter.use(checkIfAuthenticated);

export default userRouter;
