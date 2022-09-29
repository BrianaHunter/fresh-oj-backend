import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  mongoUri: process.env.MONGO_URI as string,
<<<<<<< HEAD
  port: process.env.PORT || 8000,
=======
  port: process.env.PORT || 5000,
>>>>>>> faafddf2f263ebc5cf578d33a3a4ba56cac0f38c
};
