import express from "express";
import helmet from "helmet";
import getAuthToken from "./api/middlewares/getAuthToken";
import userRouter from "./api/routes/userRoute";
import cors from "cors";
import sweetsRoute from "./api/routes/sweetsRoute";
import mongoose from "mongoose";
import fileupload from "express-fileupload";

mongoose.connect("mongodb://localhost:27017/lady-lollipop-db").then(() => {
  console.log("connected to mongodb on port 27017");
});

const app = express();

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use("/static", express.static(`${__dirname}/public/files`));

app.use(helmet());

app.use(fileupload());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(getAuthToken);

app.use("/users", userRouter);

app.use("/sweets", sweetsRoute);

app.listen(port, () => {
  console.log(`Lady Lollipop listening on: ${port}`);
});
