import { plainToInstance } from "class-transformer";
import { AppDataSource } from "../config/data-source";
import { CreateTeacherDTO } from "../dtos/teacher/create-teacher.dto";
import { GetTeacherDTO } from "../dtos/teacher/get-teacher.dto";
import { LoginTeacherDTO } from "../dtos/teacher/login-teacher.dto";
import { Teacher } from "../entities/Teacher";
import { generateToken } from "../utils/generateToken";
import { createClassIfNotExists } from "./classService";

const teacherRepository = AppDataSource.getRepository(Teacher);

export const createTeacher = async (teacher: CreateTeacherDTO): Promise<{ teacher: GetTeacherDTO, token: string }> => {
    if (teacher.password !== process.env.TEACHER_PASSWORD) {
        throw new Error("Invalid credentials");
    }
    const newTeacher = teacherRepository.create(teacher);
    const savedTeacher = await teacherRepository.save(newTeacher);

    return {
        teacher: plainToInstance(GetTeacherDTO, savedTeacher, {
            excludeExtraneousValues: false
        }),
        token: generateToken(savedTeacher)
    };
};

export const loginTeacher = async (data: LoginTeacherDTO): Promise<{ teacher: GetTeacherDTO, token: string }> => {
    console.log("Login data is service:");
    console.log(data);

    if (data.password !== process.env.TEACHER_PASSWORD) {
        throw new Error("Invalid credentials");
    }
    const teacher: Teacher | null = await teacherRepository.findOne({
        where: { identityNumber: data.identityNumber },
        relations: ["class"]
    });
    if (!teacher) {
        throw new Error("Teacher not found");
    }
    return {
        teacher: plainToInstance(GetTeacherDTO, teacher, {
            excludeExtraneousValues: false
        }),
        token: generateToken(teacher)
    };
};

export const fetchTeacherById = async (id: number): Promise<GetTeacherDTO | null> => {
    const teacher = await teacherRepository.findOne({
        where: { id },
        relations: ["class"]
    });
    if (!teacher) {
        return null;
    }
    return plainToInstance(GetTeacherDTO, teacher, {
        excludeExtraneousValues: false
    });
};

export const fetchAllTeachers = async (): Promise<GetTeacherDTO[]> => {
    const teachers = await teacherRepository.find({ relations: ["class"] });
    return plainToInstance(GetTeacherDTO, teachers, {
        excludeExtraneousValues: false
    });
};
