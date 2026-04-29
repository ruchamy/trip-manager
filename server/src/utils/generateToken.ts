import { Teacher } from "../entities/Teacher";
import jwt from "jsonwebtoken";

export const generateToken = (teacher: Teacher) => {
  return jwt.sign(
    {
      id: teacher.id,
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      identityNumber: teacher.identityNumber,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );
};

