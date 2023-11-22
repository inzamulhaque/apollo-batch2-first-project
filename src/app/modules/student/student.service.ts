import Student from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); // build in static method
  // return result;
  const student = new Student(studentData); // create an instance
  if (await student.isUserExists(studentData.id)) {
    throw new Error('User already exists');
  }
  const result = await student.save(); // build in instance method
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export { createStudentIntoDB, getAllStudentsFromDB, getSingleStudentFromDB };
