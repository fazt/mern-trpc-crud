import express from "express";
import * as trpc from "@trpc/server";
import path from "path";
import { notesRouter } from "./routes/notes";
import * as trpcExpress from "@trpc/server/adapters/express";
import { publicProcedure, router, createContext } from "./trpc";
import cors from 'cors';
const app = express();

const appRouter = router({
  note: notesRouter,
});

app.use(cors())

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export type AppRouter = typeof appRouter;

export default app;
