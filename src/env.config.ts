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
    NEXT_PUBLIC_BASE_URL: z.url(),
  },
  clientPrefix: "NEXT_PUBLIC_",
});

export default env;
