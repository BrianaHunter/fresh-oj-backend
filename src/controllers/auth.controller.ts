import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export async function login(req: Request, res: Response) {
  try {
    const user = await authService.login(req.query.uid as string);
    if (!user) return res.status(404).json("User not found");
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function signUp(req: Request, res: Response) {
  try {
    const user = await authService.signup(req.body);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
