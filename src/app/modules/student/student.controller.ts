import { Request, Response } from 'express';
import {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
} from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const { error, value } = studentValidationSchema.validate(studentData);

    if (error) {
      return res.status(500).json({
        success: false,
        message: 'Student not created',
        error,
      });
    }

    const result = await createStudentIntoDB(value);

    res.status(201).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Student not created',
      error: err,
    });
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
