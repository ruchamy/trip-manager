import { AppDataSource } from "../config/data-source";
import { Class } from "../entities/Class";

const classRepository = AppDataSource.getRepository(Class);


export const createClassIfNotExists = async (name: string): Promise<Class> => {
    let existingClass = await classRepository.findOne({ where: { name } });

    if (!existingClass) {
        existingClass = classRepository.create({ name });
        await classRepository.save(existingClass);
    }
    return existingClass;
}

export const getAllClasses = async (): Promise<Class[]> => {
    return await classRepository.find();
}
