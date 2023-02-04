import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../src/app";

export const trpc = createTRPCReact<AppRouter>();
