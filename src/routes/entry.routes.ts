import express from "express";
import {
  getEntry,
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
} from "../controllers/entry.controller";

export const userRouter = express.Router();

userRouter.route("/").get(getEntries).post(addEntry);
userRouter.route("/:id").get(getEntry).patch(updateEntry).delete(deleteEntry);
