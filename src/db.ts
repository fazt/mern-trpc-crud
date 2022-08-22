import { connect } from "mongoose";
import {MONGODB_URI} from './config';

export const dbConnect = async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log(db.connection.db.databaseName);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
