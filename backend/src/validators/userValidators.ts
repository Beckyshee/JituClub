import joi from "joi";

export const registerUserSchema = joi.object({
  name: joi.string(),
  email: joi.string().email(),
  phone_no: joi.string().min(10),
  id_no: joi.number().min(8),
  cohort_no: joi.string(),
  password: joi.string(),
});

export const loginUserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
