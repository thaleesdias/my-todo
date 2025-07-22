import { NextFunction, Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { userLogin } from "../services/authService";
import { compare } from "bcrypt";

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
  const JWT_SECRET = process.env.JWT_SECRET;

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

export const authenticate = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const users = await userLogin(email);

    const user = users[0];

    if (!user) {
      res.status(404).json({ message: "Usuário não registrado" });
      return;
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      res.status(401).json({ message: "Senha inválida" });
    }

    const token = sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    const { id } = user;

    res.status(200).json({
      user: { id, email },
      token,
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};
