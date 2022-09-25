import { Request, Response } from "express";
import { moodService } from "../services/mood.service";

export async function getMoods(req: Request, res: Response) {
  try {
    const moods = await moodService.getMoods();
    return res.status(200).json(moods);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getMood(req: Request, res: Response) {
  try {
    const mood = await moodService.getMood(req.params.id);
    if (!mood) return res.status(404).json("Mood not found");
    return res.status(200).json(mood);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function addMood(req: Request, res: Response) {
  try {
    const newMood = await moodService.addMood(req.body);
    return res.status(201).json(newMood);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function updateMood(req: Request, res: Response) {
  try {
    const updatedMood = await moodService.updateMood(req.params.id, req.body);
    return res.status(200).json(updatedMood);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function deleteMood(req: Request, res: Response) {
  try {
    await moodService.deleteMood(req.params.id);
    return res.sendStatus(204);
  } catch (error) {}
}
