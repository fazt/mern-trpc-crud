import app from "./app";
import { dbConnect } from "./db";
import { PORT } from "./config";

dbConnect();
app.listen(PORT as number);
console.log("Server is running on port 3000");
