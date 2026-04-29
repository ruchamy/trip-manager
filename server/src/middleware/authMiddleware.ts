import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  console.log(token);

  if (!token) return res.sendStatus(401);


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    console.log(decoded);

    (req as any).user = decoded;
    next();
  } catch {
    return res.sendStatus(403);
  }
};