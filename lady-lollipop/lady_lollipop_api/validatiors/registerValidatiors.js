import Joi from "joi";

const schema = Joi.object().keys({
  firstName: Joi.string().min(3).max(12).required(),
  lastName: Joi.string().min(3).max(12).required(),
  username: Joi.string().min(3).max(12).required(),
  email: Joi.string().email().min(5).max(25).required(),
  password: Joi.string().min(6).max(12).required(),
});

export default schema;