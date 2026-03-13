import { defineEnv } from "envin";
import * as z from "zod";

const env = defineEnv({
  shared: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  server: {
    // DATABASE_URL: z.url(),
    // JWT_SECRET: z.string().min(32),
  },
  client: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NODE_ENV !== "development"
        ? z.url()
        : z.url().default("http://localhost:3000"),
  },
  clientPrefix: "NEXT_PUBLIC_",
});

export default env;
