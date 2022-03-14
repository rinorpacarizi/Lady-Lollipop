import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    description: String,
    files: String,
    userId: String,
  },
  { typeKey: "$type" }
);

export default mongoose.model("drinks", schema);
