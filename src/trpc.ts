import * as trpc from "@trpc/server";
import { notesRoutes } from "./routes/notes";

const appRouter = trpc
  .router()
  .query("ping", {
    resolve() {
      return "pong";
    },
  })
  .merge(notesRoutes);

export type AppRouter = typeof appRouter;

export default appRouter;
