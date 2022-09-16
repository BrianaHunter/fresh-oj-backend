import { model, Schema } from "mongoose";
import { Entry } from "../types/entry.types";

// 1. Setup our schema
const entrySchema = new Schema<Entry>(
  {
    userId: { type: String, required: true },
    content: { type: String, required: true },
    mood: { type: String, required: true },
  },
  { timestamps: true }
  // { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Alternative method for setting the createAt and updatedAt field names
);

// 2. Create the modal from the Schema
export const entryModel = model<Entry>("Entry", entrySchema);
