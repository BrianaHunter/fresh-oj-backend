import { model, Schema } from "mongoose";
import { Profile } from "../types/profile.types";

// 1. Setup our schema
const profileSchema = new Schema<Profile>(
  {
    uid: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    photoURL: { type: String },
    bio: { type: String },
  },
  { timestamps: true }
);

// 2. Create the modal from the Schema
export const profileModel = model<Profile>("Profile", profileSchema);
