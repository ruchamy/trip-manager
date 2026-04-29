import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";
import type { FormType } from "../../types/login.types";

export default function Login() {
    const [form, setForm] = useState<FormType>({
        identityNumber: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const login = useLogin();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError(null);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();        
        login.mutate(form, {
            onSuccess: (data: any) => {
                console.log("Login successful");
                console.log(data.teacher);
                
                navigate("/list/my-students");
            },
            onError: (err: any) => {
                console.error("Login error:", err);
                setError("ההתחברות נכשלה, אנא בדוק את פרטי ההתחברות ונסה שוב");
            },
        });
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                name="identityNumber"
                placeholder="מספר זהות"
                className={styles.input}
                value={form.identityNumber}
                onChange={handleChange}
            />
            <label className={styles.label}>
                הסיסמה הסודית שהמורים קיבלו מראש, יש להכניס אותה כדי להתחבר כמורה
            </label>
            <input
                name="password"
                type="password"
                placeholder="סיסמה"
                className={styles.input}
                value={form.password}
                onChange={handleChange}
            />
            {error && <div className={styles.error}>{error}</div>}

            <button type="submit" className={styles.button}>
                התחבר
            </button>
        </form>
    );
}