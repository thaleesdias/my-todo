import { Router, Request, Response } from "express";

import * as operation from "../services/taskServices";
import { create } from "../controller/taskController";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.json({
    message: "Hello, World!",
    status: "ok",
  });
});

router.get("/db", async (req: Request, res: Response) => {
  res.json(operation.getAllTasks);
});

// rotas pra ver todas as tasks
router.get("/tasks", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// rota para ver  tasks nao concluidas
router.post("/create", create);

// rota para ver tasks concluidas
router.get("/completed", (req: Request, res: Response) => {
  res.send("World, Hello!");
});

router.get("/salve/:msg", (req: Request, res: Response) => {
  const msg: string = req.params.msg;
  res.send(`<h1>  ${msg}  </h1>`);
});

export default router;
