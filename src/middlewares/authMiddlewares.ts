import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

declare module "express" {
  interface Request {
    userId?: string;
  }
}

type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};

export function AuthMidlleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!JWT_SECRET) {
    res.status(401).json({ message: "JWT_SECRET nao fornecido" });
    return;
  }

  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: "sem token" });
    return;
  }

  const [, token] = authorization?.split(" ");

  try {
    const decoded = verify(token, JWT_SECRET);
    const { id } = decoded as TokenPayload;
    req.userId = id;
    next();
  } catch (error) {
    res.status(401).json({ message: "invalid token" });
  }
}
