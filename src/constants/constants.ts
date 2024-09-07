import { env } from "@/env/client";

export const BASE_URL = env.NEXT_PUBLIC_URL ?? "http://localhost:3000";
export const SUPPORT_EMAIL =
  env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "nmktadesse@gmail.com";

export const SUBSCRIBE_URL = "https://subscription.dummy.com";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";
