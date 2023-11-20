import express from 'express';
import {
  createStudent,
  getAllStudents,
  getSingleStuden,
} from './student.controller';

const router = express.Router();

router.get('/', getAllStudents);

router.get('/:studentId', getSingleStuden);

router.post('/create-student', createStudent);

export const StudentRoutes = router;
