import { useState } from "react";
import styles from "./Register.module.css";
import {
  validateClass,
  validateId,
  validateRequired,
  normalizeClassName,
} from "../../../../shared/validation/formValidation";
import { useCreateTeacher } from "../hooks/useCreateTeacher";
import { useNavigate } from "react-router-dom";
import type { FormType } from "../../types/teacherRegister.types";



export default function TeacherRegister() {
  const [form, setForm] = useState<FormType>({
    identityNumber: "",
    firstName: "",
    lastName: "",
    className: "",
    password: "",
  });
  const createTeacher = useCreateTeacher();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Partial<FormType>>({});

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case "identityNumber":
        return validateId(value);
      case "firstName":
      case "lastName":
      case "password":
        return validateRequired(value);
      case "className":
        return validateClass(value);
      default:
        return null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "className") {
      newValue = normalizeClassName(value);
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    const error = validateField(name, newValue);

    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const isFormValid = () => {
    return (
      form.identityNumber &&
      form.firstName &&
      form.lastName &&
      form.className &&
      form.password &&
      Object.values(errors).every((e) => !e)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<FormType> = {
      identityNumber: validateId(form.identityNumber) || undefined,
      firstName: validateRequired(form.firstName) || undefined,
      lastName: validateRequired(form.lastName) || undefined,
      className: validateClass(form.className) || undefined,
      password: validateRequired(form.password) || undefined,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((e) => e)) return;

    createTeacher.mutate(form, {
      onSuccess: () => {
        navigate("/success");
      },
      onError: (err: any) => {
        setErrors((prev) => ({
          ...prev,
          identityNumber: "מורה עם תעודת זהות זו כבר קיים",
        }));
        console.error("Error creating teacher:", err);
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <input
        name="identityNumber"
        placeholder="מספר זהות"
        value={form.identityNumber}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.identityNumber && <span className={styles.error}>{errors.identityNumber}</span>}

      <input
        name="firstName"
        placeholder="שם פרטי"
        value={form.firstName}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}

      <input
        name="lastName"
        placeholder="שם משפחה"
        value={form.lastName}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}

      <input
        name="className"
        placeholder="כיתה (לדוגמה: ו1, ז3)"
        value={form.className}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.className && <span className={styles.error}>{errors.className}</span>}

      <input
        type="password"
        name="password"
        placeholder="סיסמת מורה"
        value={form.password}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.password && <span className={styles.error}>{errors.password}</span>}

      <button
        type="submit"
        className={styles.button}
        disabled={!isFormValid()}
      >
        הרשמה
      </button>
    </form>
  );
}