import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login.api";
import { useApp } from "../../../../context/AppContext";

export const useLogin = () => {
    const { setTeacherId } = useApp();
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            setTeacherId(data.teacher.identityNumber);
        },
    });
};