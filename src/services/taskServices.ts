import pool from "../config/database";
import { Task } from "../models/task";

// faz as busca no banco e retorna todas as tasks
export const getAllTasks = async (): Promise<Task[]> => {
  const result = await pool.query("SELECT * FROM tasks");
  return result.rows;
};

//mostra as tasks que estao completas
export const showCompleted = async (): Promise<Task[]> => {
  const result = await pool.query("SELECT * FROM tasks WHERE completed = true");
  return result.rows;
};

//cria a task
export const createTask = async (
  title: string,
  description: string,
  completed = false
): Promise<void> => {
  await pool.query(
    "INSERT INTO tasks (title, description, completed) VALUES ($1, $2, $3)",
    [title, description, completed]
  );
};

//altera a task de completed=false para completed = true
export const setTaskAsCompleted = async (id: number): Promise<void> => {
  const result = await pool.query(
    "UPDATE tasks SET completed = true WHERE id = $1",
    [id]
  );

  return;
};

//altera a task de completed=false para completed = false
export const setTaskAsIncompleted = async (id: number): Promise<void> => {
  const result = await pool.query(
    "UPDATE tasks SET completed = false WHERE id = $1",
    [id]
  );

  return;
};
