import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import appRouter from "./trpc";
import cors from "cors";
import path from "path";

const app = express();

// Middlewares
app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
  })
);

app.get("/api", (req, res) => {
  res.send("Welcome to my API");
});

app.use(express.static(path.join(__dirname, "../../client/dist")));

export default app;
