import * as Joi from "@hapi/joi";

export default function jobApplicationValidate(data: any) {
  const schema = Joi.object({
    companyName: Joi.string()
      .min(2)
      .required()
      .label("Company Name"),
    jobTitle: Joi.string()
      .min(2)
      .required()
      .label("Job Title"),
    jobDescription: Joi.string()
      .min(2)
      .required()
      .label("Job Description"),
    jobUrl: Joi.string()
      .pattern(
        new RegExp(
          /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
        )
      )
      .required()
      .label("Job Url")
  }).options({ stripUnknown: true });

  return schema.validate(data);
}
