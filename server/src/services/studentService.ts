import { plainToInstance } from "class-transformer";
import { AppDataSource } from "../config/data-source";
import { GetStudentDTO } from "../dtos/student/get-student.dto";
import { Student } from "../entities/Student";
import { CreateStudentDTO } from "server/src/dtos/student/create-student.dto";



const studentRepository = AppDataSource.getRepository(Student);

export const createStudent = async (student: CreateStudentDTO): Promise<CreateStudentDTO> => {
    return await studentRepository.save(student);
};

export const fetchAllStudents = async (): Promise<GetStudentDTO[]> => {
    const student =await studentRepository.find({ relations: ["class"] });
    if(!student){
        throw new Error("No students found");
    }
    return plainToInstance(GetStudentDTO, student,{
        excludeExtraneousValues: false
    });
};

export const fetchStudentsByClassName = async (className: string): Promise<GetStudentDTO[]> => {
    const students = await studentRepository.find({ 
        where: { class: { name: className } },
        relations: ["class"]
    });
    if (students.length === 0) {
        throw new Error(`No students found for class name: ${className}`);
    }
    return plainToInstance(GetStudentDTO, students, {
        excludeExtraneousValues: false
    });
};
