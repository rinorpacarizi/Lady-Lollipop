import Joi from "joi";

const updatedCakesSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string(),
  price: Joi.number(),
  stock: Joi.number(),
  description:Joi.string().min(5).max(100)
});

export default updatedCakesSchema;
