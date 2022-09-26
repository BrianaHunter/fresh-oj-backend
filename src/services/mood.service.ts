import { Mood } from "../types/mood.types";
import { moodModel } from "../models/mood.model";

async function getMoods() {
  const moods = await moodModel.find();
  return moods;
}

async function getMood(id: string) {
  const mood = await moodModel.findById(id);
  return mood;
}

async function getMoodByUserId(userId: string) {
  const mood = await moodModel.findOne({ userId }).lean();
  return mood;
}

async function addMood(data: Partial<Mood>) {
  const newMood = await moodModel.create(data);
  return newMood;
}

async function updateMood(id: string, data: Partial<Mood>) {
  const updatedMood = await moodModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedMood;
}

async function deleteMood(id: string) {
  return await moodModel.findByIdAndDelete(id);
}

export const moodService = {
  getMoods,
  getMood,
  getMoodByUserId,
  addMood,
  updateMood,
  deleteMood,
};
