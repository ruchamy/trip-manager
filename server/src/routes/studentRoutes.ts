import { Router } from 'express';
import { addStudent, getStudents, getStudentsByClassName, getStudentsByCurrentTeacher } from '../controllers/studentController';
import { validateDTO } from '../middleware/validate-dto.middleware';
import { CreateStudentDTO } from '../dtos/student/create-student.dto';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/',validateDTO(CreateStudentDTO), addStudent);
router.get('/',authMiddleware, getStudents);
router.get('/class/:className',authMiddleware, getStudentsByClassName);
router.get('/current',authMiddleware, getStudentsByCurrentTeacher);

export default router;