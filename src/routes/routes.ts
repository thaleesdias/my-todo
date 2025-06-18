import { Router } from "express";
import pool from "../db/database";

const router = Router();

router.get("/", async (req, res) => {
  res.json({
    message: "Hello, World!",
    status: "ok",
  });
});

router.get("/db", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});

// rotas pra ver todas as tasks
router.get("/tasks", (req, res) => {
  res.send("Hello, World!");
});

// rota para ver  tasks nao concluidas
router.get("/todo", (req, res) => {
  res.send("Hello, World!");
});

// rota para ver tasks concluidas
router.get("/completed", (req, res) => {});

router.get("/salve/:msg", (req, res) => {
  const msg: string = req.params.msg;
  res.send(`<h1>  ${msg}  </h1>`);
});

export default router;
