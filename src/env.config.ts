import { defineEnv } from "envin";
import z from "zod";

const env = defineEnv({
  shared: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  server: {
    RESEND_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NODE_ENV !== "development"
        ? z.string().url()
        : z.string().url().default("http://localhost:3000"),
  },
  clientPrefix: "NEXT_PUBLIC_",
});

export default env;
