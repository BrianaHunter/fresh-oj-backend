import { Request, Response } from "express";
import { entryService } from "../services/entry.service";

export async function getEntries(req: Request, res: Response) {
  try {
    const entries = await entryService.getEntries();
    return res.status(200).json(entries);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getEntry(req: Request, res: Response) {
  try {
    const entry = await entryService.getEntry(req.params.id);
    if (!entry) return res.status(404).json("Entry not found");
    return res.status(200).json(entry);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
