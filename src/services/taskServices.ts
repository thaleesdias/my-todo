import pool from "../config/database";
import { Task } from "../models/task";

export const getAllTasks = async (): Promise<Task[]> => {
  const result = await pool.query("SELECT * FROM tasks");
  return result.rows;
};

export const showCompleted = async (): Promise<Task[]> => {
  const result = await pool.query("SELECT * FROM tasks WHERE completed = true");
  return result.rows;
};

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
