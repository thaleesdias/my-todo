import { Router, Request, Response } from "express";

import {
  completedTasks,
  create,
  getAllTasks,
} from "../controller/taskController";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.json({
    message: "Hello, World!",
    status: "ok",
  });
});

// rotas pra ver todas as tasks
router.get("/tasks", getAllTasks);

// rota para ver  tasks nao concluidas
router.post("/create", create);

// rota para ver tasks concluidas
router.get("/completed", completedTasks);

router.get("/salve/:msg", (req: Request, res: Response) => {
  const msg: string = req.params.msg;
  res.send(`<h1>  ${msg}  </h1>`);
});

export default router;
