import * as Joi from "@hapi/joi";

export default function loginFormValidate(data: any) {
  const schema = Joi
    .object({
      email: Joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'ie', "br"] } })
        .required()
        .label("Email"),
      password: Joi
        .string()
        .required()
        .label("Password")
    })
    .options({ stripUnknown: true });

  return schema.validate(data);
}
