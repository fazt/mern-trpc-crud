import { connect } from "mongoose";

export const dbConnect = async () => {
  try {
    const db = await connect("mongodb://localhost/trpcdb");
    console.log(db.connection.db.databaseName);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
