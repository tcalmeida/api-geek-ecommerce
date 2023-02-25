/* import { body } from "express-validator";

import validate from "../../Middlewares/handleError";

validate([
  body("name").isString().notEmpty().withMessage("name is required"),

  body("email")
    .isEmail()
    .withMessage("email must be valid")
    .notEmpty()
    .withMessage("email is required"),

  body("password")
    .isString()
    .isLength({ min: 4 })
    .withMessage("password must be at least 4 chars long")
    .notEmpty()
    .withMessage("email is required"),

  body("isAdm")
    .isBoolean({ loose: false })
    .withMessage("isAdm must be 0 or 1")
    .notEmpty()
    .withMessage("isAdm must de defined"),
]) 
    


export default validate; */


import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    isAdm: Joi.boolean().required(),
  }),
});