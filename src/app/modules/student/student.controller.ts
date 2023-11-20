import { Request, Response } from 'express';
import {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
} from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await createStudentIntoDB(studentData);

    res.status(201).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStuden = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export { createStudent, getAllStudents, getSingleStuden };