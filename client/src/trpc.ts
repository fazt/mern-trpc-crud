import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "../../server/src/trpc";

export const trpc = createReactQueryHooks<AppRouter>();
