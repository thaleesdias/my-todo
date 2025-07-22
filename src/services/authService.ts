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

export const showUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const userLogin = async (email: string) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1 ", [
    email,
  ]);
  return result.rows || null;
};
