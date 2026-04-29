import { api } from "../../../../app/api";

export const getStudents = async () => {
  try {
    const res = await api.get("/students");
    return res.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

export const getStudentsByClass = async (className: string) => {
  try {
    const res = await api.get(`/students/class/${className}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching students by class:", error);
    throw error;
  }
};

export const getStudentsByCurrentTeacher = async () => {
  try {
    console.log("getStudentsByCurrentTeacher");

    const res = await api.get("/students/current");
    console.log(res);

    return res.data;
  } catch (error) {
    console.error("Error fetching students by current teacher:", error);
    throw error;
  }
};
