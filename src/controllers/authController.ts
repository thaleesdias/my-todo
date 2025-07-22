import { Request, Response } from "express";

import { hash } from "bcrypt";

import * as authService from "../services/authService";

export const loginRegister = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const passwordHash = await hash(password, 10);

    await authService.registerUser(name, email, passwordHash);

    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    res.status(500).json({
      message: "nao foi possivel criar usuario",
      err: error,
    });
  }
};

export const showUsers = async (req: Request, res: Response) => {
  try {
    const result = await authService.showUsers();

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "não foi possivel listar usuarios" });
  }
};
