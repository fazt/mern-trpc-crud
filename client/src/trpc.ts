import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "../../src/trpc";

export const trpc = createReactQueryHooks<AppRouter>();
