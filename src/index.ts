import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config/config";
import { userRouter } from "./routes/user.routes";
import { entryRouter } from "./routes/entry.routes";

// import { profileRouter } from "./routes/profile.routes";
// import { linkRouter } from "./routes/link.routes";
import { authRouter } from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/entries", entryRouter);

// Setup mongoose mongodb connection
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("Connected to MongoDB"));

const port = config.port;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
