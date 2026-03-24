import { defineEnv } from "envin";
import z from "zod";

const env = defineEnv({
  shared: {},
  envStrict: {
    CONTACT_US_SCHEDULE_LINK: process.env.CONTACT_US_SCHEDULE_LINK,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
  server: {
    CONTACT_US_SCHEDULE_LINK: z.string().url(),
    RESEND_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NODE_ENV !== "development"
        ? z.string().url()
        : z.string().url().default("http://localhost:3000"),

    NEXT_PUBLIC_SENTRY_DSN:
      process.env.NODE_ENV !== "development"
        ? z.string().url()
        : z.string().url().optional(),
  },
  clientPrefix: "NEXT_PUBLIC_",
});

export default env;
