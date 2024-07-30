import { z } from 'zod';

// Define the schema using Zod
const characterSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  age: z.number().int().min(0, { message: "Age must be a non-negative integer" }),
  gender: z.string().nonempty({ message: "Gender is required" }),
  sexualOrientation: z.string().nonempty({ message: "Sexual orientation is required" }),
  race: z.string().nonempty({ message: "Race is required" }),
  skinColor: z.string().nonempty({ message: "Skin color is required" }),
  bodyType: z.string().nonempty({ message: "Body type is required" }),
  eyeColor: z.string().nonempty({ message: "Eye color is required" }),
  hairColor: z.string().nonempty({ message: "Hair color is required" }),
  height: z.number().int().min(0, { message: "Height must be a non-negative integer" }),
  weight: z.number().int().min(0, { message: "Weight must be a non-negative integer" }),
  description: z.string().nonempty({ message: "Description is required" }),
  image: z.string().optional(),
  status: z.string().nonempty({ message: "Status is required" }),
  birthplace: z.string().nonempty({ message: "Birthplace is required" }),
  nationality: z.string().nonempty({ message: "Nationality is required" }),
  occupation: z.string().nonempty({ message: "Occupation is required" }),
  class: z.string().nonempty({ message: "Class is required" }),
});

// Validation function
export const validateCharacterInput = (input: unknown) => {
  try {
    characterSchema.parse(input);
    return { error: null };
  } catch (e) {
    if (e instanceof z.ZodError) {
      return { error: e };
    } else {
      throw e;
    }
  }
};
