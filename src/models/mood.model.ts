import { model, Schema } from "mongoose";
import { Mood } from "../types/mood.types";

// 1. Setup our schema
const moodSchema = new Schema<Mood>(
  {
    userId: { type: String, required: true },
    mood: { type: String, required: true },
  },
  { timestamps: true }
  // { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Alternative method for setting the createAt and updatedAt field names
);

// 2. Create the modal from the Schema
export const moodModel = model<Mood>("Mood", moodSchema);
