import { api } from "../../../app/api";


export const createStudent = async (data: any) => {
  try {
  const jsonData = JSON.stringify(data);
  const res = await api.post("/students", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
  } catch (err) {
    throw err;
  }
};