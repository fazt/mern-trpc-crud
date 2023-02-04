import express from "express";
import { notesRouter } from "./routes/notes";
import * as trpcExpress from "@trpc/server/adapters/express";
import { router, createContext } from "./trpc";
import cors from "cors";
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

export type AppRouter = typeof appRouter;

export default app;
