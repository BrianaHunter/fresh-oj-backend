import express from "express";
import {
  getEntry,
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
} from "../controllers/entry.controller";

export const entryRouter = express.Router();

entryRouter.route("/").get(getEntries).post(addEntry);
entryRouter.route("/:id").get(getEntry).patch(updateEntry).delete(deleteEntry);
