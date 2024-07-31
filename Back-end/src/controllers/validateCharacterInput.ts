import * as Yup from 'yup';

// Define the schema using Yup
const characterSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Last name is required'),
  age: Yup.number().integer('Age must be an integer').min(0, 'Age must be a non-negative integer').required('Age is required'),
  gender: Yup.string().required('Gender is required'),
  sexualOrientation: Yup.string().required('Sexual orientation is required'),
  race: Yup.string().required('Race is required'),
  skinColor: Yup.string().required('Skin color is required'),
  bodyType: Yup.string().required('Body type is required'),
  eyeColor: Yup.string().required('Eye color is required'),
  hairColor: Yup.string().required('Hair color is required'),
  height: Yup.number().integer('Height must be an integer').min(0, 'Height must be a non-negative integer').required('Height is required'),
  weight: Yup.number().integer('Weight must be an integer').min(0, 'Weight must be a non-negative integer').required('Weight is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().optional(),
  status: Yup.string().required('Status is required'),
  birthplace: Yup.string().required('Birthplace is required'),
  nationality: Yup.string().required('Nationality is required'),
  occupation: Yup.string().required('Occupation is required'),
  class: Yup.string().required('Class is required'),
});

// Validation function
type ValidationResult = {
  error: string[] | null;
};

export const validateCharacterInput = async (input: unknown): Promise<ValidationResult> => {
  try {
    await characterSchema.validate(input, { abortEarly: false });
    return { error: null };
  } catch (e) {
    if (e instanceof Yup.ValidationError) {
      console.error('Validation errors:', e.errors);
      return { error: e.errors };
    } else {
      console.error('Unexpected error:', e);
      return { error: ['Unexpected validation error'] };
    }
  }
};
