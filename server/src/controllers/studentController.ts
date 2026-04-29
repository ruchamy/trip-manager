import { Request, Response } from 'express';
import { createStudent, fetchAllStudents, fetchStudentsByClassName } from '../services/studentService';
import { createClassIfNotExists } from '../services/classService';
import { Class } from '../entities/Class';
import { fetchTeacherById } from '../services/teacherService';
export const addStudent = async (req: Request, res: Response) => {
    try {
        const existingClass: Class = await createClassIfNotExists(req.body.className);
        const student = await createStudent({ ...req.body, class: existingClass });
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};
export const getStudents = async (req: Request, res: Response) => {
    try {
        const students = await fetchAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getStudentsByClassName = async (req: Request, res: Response) => {
    try {
        let className = req.params.className;
        if (Array.isArray(className)) {
            className = className[0];
        }
        const students = await fetchStudentsByClassName(className);
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};
export const getStudentsByCurrentTeacher = async (req: Request, res: Response) => {
    try {
        console.log((req as any).user);

        const teacherId = (req as any).user.id;
        console.log(teacherId);

        const teacher = await fetchTeacherById(teacherId);
        console.log(teacher);

        const className = teacher!.class.name
        const students = await fetchStudentsByClassName(className);
        console.log(students);

        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};
