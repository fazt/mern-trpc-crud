import express from "express";
import { notesRouter } from "./routes/notes";
import * as trpcExpress from "@trpc/server/adapters/express";
import { router, createContext } from "./trpc";
import cors from "cors";
import path from "path";

const app = express();

const appRouter = router({
  note: notesRouter,
});

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.use(express.static(path.join(__dirname, "../client/dist")));

export type AppRouter = typeof appRouter;

export default app;
