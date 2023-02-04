import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

export const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Database connected to ", db.connection.db.databaseName);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      process.exit(1)
    }
  }
};
