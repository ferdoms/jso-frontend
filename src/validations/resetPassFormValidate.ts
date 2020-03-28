import * as Joi from "@hapi/joi";

export default function resetPassFormValidate(data: any) {
  const schema = Joi.object({
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{8,12}$"))
      .min(8)
      .max(12)
      .required()
      .label("Password"),
    confirm_pass: Joi.ref("password")
  }).options({ stripUnknown: true });

  return schema.validate(data);
}
