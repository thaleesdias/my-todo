import { Request, Response } from "express";
import * as taskService from "../services/taskServices";

export const create = async (req: Request, res: Response) => {
  const { title, description, completed } = req.body;

  try {
    await taskService.createTask(title, description, completed);
    res.status(201).json({
      message: "task criada com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      error: "falha ao criar task",
    });
  }
};
