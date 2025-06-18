import pool from "../config/database";
import { Task } from "../models/task";

export const getAllTasks = async (): Promise<Task[]> => {
  const result = await pool.query("SELECT * FROM tasks");
  return result.rows;
};
