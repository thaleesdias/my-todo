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

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const result = await taskService.getAllTasks();

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({
      message: "nao foi possivel exibir as Tasks",
    });
  }
};

export const completedTasks = async (req: Request, res: Response) => {
  try {
    const result = await taskService.showCompleted();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "nao foi possivel mostrar as tasks concluidas",
    });
  }
};
