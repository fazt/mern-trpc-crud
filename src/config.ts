import { config } from "dotenv";

config();

export const PORT = parseInt(process.env.PORT || "") || 3000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017";
