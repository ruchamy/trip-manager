import { useQuery } from "@tanstack/react-query";
import { getStudents, getStudentsByClass, getStudentsByCurrentTeacher } from "../api/students-list.api";

export const useStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
};

export const useStudentsByClass = (className: string) => {
  return useQuery({
    queryKey: ["students", className],
    queryFn: () => getStudentsByClass(className),
    enabled: !!className,
  });
};

export const useStudentsByCurrentTeacher = () => {
  return useQuery({
    queryKey: ["students", "currentTeacher"],
    queryFn: getStudentsByCurrentTeacher,
  });
}