import { Router } from "express";

import {
  completedTasks,
  create,
  getAllTasks,
  updateTaskToIncompleted,
  deleteTask,
  updateTaskToCompleted,
} from "../controller/taskController";

const router = Router();

// rotas pra ver todas as tasks
router.get("/tasks", getAllTasks);

// rota para criar task
router.post("/create", create);

// rota para ver tasks concluidas
router.get("/completed", completedTasks);

//rota para atualizar o completed
router.patch("/task/:id/complete", updateTaskToCompleted);

//rota que marca como incompleted
router.patch("/task/:id/incomplete", updateTaskToIncompleted);

router.delete("/delete/:id", deleteTask);

export default router;
