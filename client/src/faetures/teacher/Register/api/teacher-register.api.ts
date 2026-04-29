import { api } from "../../../../app/api"

export const createTeacher = async (data: any) => {
    try {
        const res = await api.post("/teachers", data);
        return res.data;
    } catch (err) {
        throw err;
    }
}