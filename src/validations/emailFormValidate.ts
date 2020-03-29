import * as Joi from "@hapi/joi";

export default function emailFormValidate(data: any) {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "ie", "br"] } })
      .required()
      .label("Email")
  }).options({ stripUnknown: true });

  return schema.validate(data);
}
