import { Request, Response } from "express";
import { createTeacher, fetchAllTeachers, fetchTeacherById, loginTeacher } from "../services/teacherService";
import { createClassIfNotExists } from "../services/classService";

export const addTeacher = async (req: Request, res: Response) => {
    try {
        const existingClass = await createClassIfNotExists(req.body.className);
        const teacher = await createTeacher({ ...req.body, class: existingClass });
        res.status(201).json(teacher);
    } catch (error) {
        console.log(error);

        res.status(400).json({ error: error });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { teacher, token } = await loginTeacher(req.body);
        res.status(200).json({ teacher, token });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
    }
};

export const getTeacherById = async (req: Request, res: Response) => {
    try {
        const teacher = await fetchTeacherById(parseInt(req.params.id as string));
        if (!teacher) {
            res.status(404).json({ error: "Teacher not found" });
            return;
        }
        res.status(200).json(teacher);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getTeachers = async (req: Request, res: Response) => {
    try {
        const teachers = await fetchAllTeachers();
        console.log(teachers);
        
        res.status(200).json(teachers);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};