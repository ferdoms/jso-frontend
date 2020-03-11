import * as Joi from "@hapi/joi";

export default function signupFormValidate(data: any) {
  const schema = Joi.object({
    fname: Joi.string()
      .min(2)
      .required()
      .label("First Name"),
    lname: Joi.string()
      .min(2)
      .required()
      .label("Last Name"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "ie", "br"] } })
      .required()
      .label("Email"),
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
