import { Entry } from "../types/entry.types";
import { entryModel } from "../models/entry.model";

async function getEntries() {
  const entries = await entryModel.find();
  return entries;
}

async function getEntry(id: string) {
  const entry = await entryModel.findById(id);
  return entry;
}

async function getEntryByUserId(userId: string) {
  const entry = await entryModel.findOne({ userId }).lean();
  return entry;
}

async function addEntry(data: Partial<Entry>) {
  const newEntry = await entryModel.create(data);
  return newEntry;
}

async function updateEntry(id: string, data: Partial<Entry>) {
  const updatedEntry = await entryModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedEntry;
}

async function deleteEntry(id: string) {
  return await entryModel.findByIdAndDelete(id);
}

export const entryService = {
  getEntries,
  getEntry,
  getEntryByUserId,
  addEntry,
  updateEntry,
  deleteEntry,
};
