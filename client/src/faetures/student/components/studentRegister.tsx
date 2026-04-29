import { useState } from "react";
import styles from "./studentRegister.module.css";
import {
  validateClass,
  validateId,
  validateRequired,
  normalizeClassName,
} from "../../../shared/validation/formValidation";
import { useCreateStudent } from "../hooks/useCreateStudent";
import { useNavigate } from "react-router-dom";
import type { FormState } from "../types/studentRegister.types";



export default function StudentRegister() {
  const [form, setForm] = useState<FormState>({
    identityNumber: "",
    firstName: "",
    lastName: "",
    className: "",
  });
  const createStudent = useCreateStudent();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case "identityNumber":
        return validateId(value);
      case "firstName":
      case "lastName":
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
      Object.values(errors).every((e) => !e)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<FormState> = {
      identityNumber: validateId(form.identityNumber) || undefined,
      firstName: validateRequired(form.firstName) || undefined,
      lastName: validateRequired(form.lastName) || undefined,
      className: validateClass(form.className) || undefined,
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((e) => e)) return;

    createStudent.mutate(form, {
      onSuccess: () => {
        navigate("/success");
      },
      onError: (err: any) => {
        setErrors((prev) => ({
          ...prev,
          identityNumber: "תלמיד עם תעודת זהות זו כבר קיים",
        }));
        console.error("Error creating student:", err);
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>רישום</h2>

      <input
        name="identityNumber"
        placeholder="תעודת זהות"
        value={form.identityNumber}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.identityNumber && <p className={styles.error}>{errors.identityNumber}</p>}

      <input
        name="firstName"
        placeholder="שם פרטי"
        value={form.firstName}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}

      <input
        name="lastName"
        placeholder="שם משפחה"
        value={form.lastName}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}

      <input
        name="className"
        placeholder="כיתה (לדוגמה: ו1 ז3)"
        value={form.className}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.className && <p className={styles.error}>{errors.className}</p>}

      <button
        type="submit"
        className={styles.button}
        disabled={!isFormValid()}
      >הרשמה</button>
    </form>
  );
}