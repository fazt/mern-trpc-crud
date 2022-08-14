import app from "./app";
import { dbConnect } from "./db";

dbConnect();
app.listen(3000);
console.log("Server is running on port 3000");
