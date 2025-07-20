import { RequestHandler } from "express";

export const authUser: RequestHandler = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name && !email && !password) {
    res.status(500).json({
      msg: "dados invalidos",
    });
  }
};
