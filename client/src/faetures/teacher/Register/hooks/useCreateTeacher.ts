import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeacher } from "../api/teacher-register.api";

export const useCreateTeacher = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTeacher,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["teachers"] });
        },
        onError: (err: any) => {
            console.error("Error creating teacher:", err);
        },
    });
};