import Joi from 'joi';

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().label('Father name'),
  fatherOccupation: Joi.string().required().label('Father occupation'),
  fatherContactNo: Joi.string().required().label('Father contact number'),
  motherName: Joi.string().required().label('Mother name'),
  motherOccupation: Joi.string().required().label('Mother occupation'),
  motherContactNo: Joi.string().required().label('Mother contact number'),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().label('Local guardian name'),
  occupation: Joi.string().required().label('Local guardian occupation'),
  contactNo: Joi.string().required().label('Local guardian contact number'),
  address: Joi.string().required().label('Local guardian address'),
});

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .label('First name')
    .regex(/^[A-Z][a-z]*$/, { name: 'capitalize format' }),
  middleName: Joi.string().trim().label('Middle name'),
  lastName: Joi.string()
    .required()
    .trim()
    .label('Last name')
    .regex(/^[A-Za-z]+$/, { name: 'valid' }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().label('Student ID').trim(),

  name: userNameValidationSchema.required().label('Student name'),

  gender: Joi.string()
    .valid('male', 'female', 'other')
    .required()
    .label('Gender'),

  dateOfBirth: Joi.string().label('Date of birth'),

  email: Joi.string().required().email().label('Email').messages({
    'string.email': '{#label} is not a valid email',
  }),

  contactNo: Joi.string().required().label('Contact number'),

  emergencyContactNo: Joi.string().required().label('Emergency contact number'),

  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .label('Blood group'),

  presentAddress: Joi.string().required().label('Present address'),

  permanentAddress: Joi.string().required().label('Permanent address'),

  guardian: guardianValidationSchema.required().label('Guardian details'),

  localGuardian: localGuardianValidationSchema
    .required()
    .label('Local guardian details'),

  profileImg: Joi.string().label('Profile image'),

  isActive: Joi.string()
    .valid('active', 'blocked')
    .label('Active status')
    .default('active'),
});

export default studentValidationSchema;
