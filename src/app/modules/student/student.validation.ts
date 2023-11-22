import { z } from 'zod';

const GuardianValidationSchema = z
  .object({
    fatherName: z.string().nonempty().min(1).max(255).optional(),
    fatherOccupation: z.string().nonempty().min(1).max(255).optional(),
    fatherContactNo: z.string().nonempty().min(1).max(255).optional(),
    motherName: z.string().nonempty().min(1).max(255).optional(),
    motherOccupation: z.string().nonempty().min(1).max(255).optional(),
    motherContactNo: z.string().nonempty().min(1).max(255).optional(),
  })
  .nonstrict();

const LocalGuardianValidationSchema = z
  .object({
    name: z.string().nonempty().min(1).max(255).optional(),
    occupation: z.string().nonempty().min(1).max(255).optional(),
    contactNo: z.string().nonempty().min(1).max(255).optional(),
    address: z.string().nonempty().min(1).max(255).optional(),
  })
  .nonstrict();

const UserNameValidationSchema = z
  .object({
    firstName: z
      .string()
      .nonempty()
      .min(1)
      .max(20)
      .regex(/^[A-Z][a-z]*$/, { message: 'First name should be capitalized' })
      .optional(),
    middleName: z.string().nonempty().min(1).max(255).optional(),
    lastName: z
      .string()
      .nonempty()
      .min(1)
      .max(255)
      .regex(/^[A-Za-z]+$/, {
        message: 'Last name is not valid',
      }),
  })
  .nonstrict();

const StudentValidationSchema = z
  .object({
    id: z.string().nonempty().min(1).max(255),
    name: UserNameValidationSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().nonempty().min(1).max(255).optional(),
    email: z.string().nonempty().min(1).max(255).email(),
    contactNo: z.string().nonempty().min(1).max(255),
    emergencyContactNo: z.string().nonempty().min(1).max(255),
    bloodGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    presentAddress: z.string().nonempty().min(1).max(255),
    permanentAddress: z.string().nonempty().min(1).max(255),
    guardian: GuardianValidationSchema,
    localGuardian: LocalGuardianValidationSchema,
    profileImg: z.string().nonempty().min(1).max(255).optional(),
    isActive: z.enum(['active', 'blocked']).optional(),
  })
  .nonstrict();

export default StudentValidationSchema;
