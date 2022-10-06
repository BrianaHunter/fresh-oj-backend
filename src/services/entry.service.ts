import { Entry } from "../types/entry.types";
import { entryModel } from "../models/entry.model";
import dayjs from "dayjs";

// async function getEntries() {
//   const entries = await entryModel.find().lean();
//   return entries;
// }
async function getEntry(id: string) {
  const entry = await entryModel.findById(id).lean();
  return entry;
}

async function getEntries(userId: string, date?: string) {
  let query = {};
  if (date && dayjs(date).isValid()) {
    query = { userId, dateAdded: date };
  } else {
    query = { userId };
  }
  const entries = await entryModel
    .find(query)
    .sort({ createdAt: "desc" })
    .lean();
  return entries;
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
  getEntry,
  getEntries,
  getEntryByUserId,
  addEntry,
  updateEntry,
  deleteEntry,
};
