import { api } from "../../../../app/api";

export const getTeachers = async () => {
    try {
        const res = await api.get("/teachers");
        return res.data;
    } catch (error) {
        console.error("Error fetching teachers:", error);
        throw error;
    }
}

