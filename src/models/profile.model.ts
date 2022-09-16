import { model, Schema } from "mongoose";
import { Profile } from "../types/profile.types";

// 1. Setup our schema
const profileSchema = new Schema<Profile>(
  {
    userId: { type: String, required: true },
    profileUsername: { type: String, required: true, unique: true },
    profileName: { type: String, required: true },
    profileDescription: { type: String },
    profilePhotoUrl: { type: String },
  },
  { timestamps: true }
);

// 2. Create the modal from the Schema
export const profileModel = model<Profile>("Profile", profileSchema);
