import pool from "../config/database";
import { User } from "../models/user";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const result = await pool.query(
    "INSERT INTO users(name, email, password) VALUES($1,$2,$3)",
    [name, email, password]
  );
  return result.rows[0];
};

const userLogin = async (name: string, email: string, password: string) => {};
