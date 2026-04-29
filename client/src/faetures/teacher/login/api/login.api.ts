import { api } from "../../../../app/api"

export const login = async (data: any) => {
    try {
        const res = (await api.post("/teachers/login", data));
        return res.data;
    }
    catch (err) {
        throw err;
    }
}