import Joi from "joi";

const characterSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  age: Joi.number().integer().required(),
  gender: Joi.string().valid("male", "female", "non-binary").required(),
  sexualOrientation: Joi.string().valid("heterosexual", "homosexual", "bisexual", "asexual").required(),
  race: Joi.string().required(),
  skinColor: Joi.string().required(),
  bodyType: Joi.string().required(),
  eyeColor: Joi.string().required(),
  hairColor: Joi.string().required(),
  height: Joi.number().required(),
  weight: Joi.number().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().required(),
  status: Joi.string().valid("active", "inactive").required(),
  birthplace: Joi.string().required(),
  nationality: Joi.string().required(),
  occupation: Joi.string().required(),
  class: Joi.string().required(),
});

export const validateCharacterInput = (input: any) => {
  return characterSchema.validate(input);
};