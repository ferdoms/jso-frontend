import * as Joi from "@hapi/joi";

export default function profileFormValidate(data: any) {
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
      .label("Email")
  }).options({ stripUnknown: true });

  return schema.validate(data);
}
