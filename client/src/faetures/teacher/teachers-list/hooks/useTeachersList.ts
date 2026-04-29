import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "../api/teachers-list.api";

export const useTeachers = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });
};