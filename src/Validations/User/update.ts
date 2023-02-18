/* import { param } from "express-validator";

function updateValidation() {
  return [param("id").isInt().withMessage("id must be a number")];
}

export default updateValidation(); */

import{ validate, Joi } from "express-validation";

export default validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

