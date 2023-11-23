import express from 'express';
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getSingleStuden,
} from './student.controller';

const router = express.Router();

router.get('/', getAllStudents);

router.get('/:studentId', getSingleStuden);

router.post('/create-student', createStudent);

router.delete('/:studentId', deleteStudent);

export const StudentRoutes = router;
