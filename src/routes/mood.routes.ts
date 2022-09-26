import express from "express";
import {
  getMood,
  getMoods,
  addMood,
  updateMood,
  deleteMood,
} from "../controllers/mood.controller";

export const userRouter = express.Router();

userRouter.route("/").get(getMoods).post(addMood);
userRouter.route("/:id").get(getMood).patch(updateMood).delete(deleteMood);
