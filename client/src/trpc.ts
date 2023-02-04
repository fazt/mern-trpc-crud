import { createTRPCReact } from "@trpc/react-query";
import { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "../../src/app";

type RouterOutput = inferRouterOutputs<AppRouter>;

export const trpc = createTRPCReact<AppRouter>();
