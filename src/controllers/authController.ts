import { Request, Response } from "express";
import bcrypt from "bcrypt";

import * as authService from "../services/authService";

export const loginRegister = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    await authService.registerUser(name, email, passwordHash);

    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    res.status(500).json({
      message: "nao foi possivel criar usuario",
      err: error,
    });
  }
};

const authLogin = async (req: Request, res: Response) => {};
