import { Router } from "express";
import { addTeacher, getTeacherById, getTeachers, login } from "../controllers/teacherController";
import { validateDTO } from "../middleware/validate-dto.middleware";
import { CreateTeacherDTO } from "../dtos/teacher/create-teacher.dto";
import { LoginTeacherDTO } from "../dtos/teacher/login-teacher.dto";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();
router.post('/', validateDTO(CreateTeacherDTO), addTeacher);
router.post('/login', validateDTO(LoginTeacherDTO), login);
router.get('byId/:id', authMiddleware, getTeacherById);
router.get('/', authMiddleware, getTeachers);
export default router;