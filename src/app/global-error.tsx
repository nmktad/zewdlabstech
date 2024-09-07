"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import CustomError, { type DefaultErrorProps } from "./error";

export default function GlobalError(props: DefaultErrorProps) {
  useEffect(() => {
    Sentry.captureException(props.error);
  }, [props.error]);

  return (
    <html lang="en">
      <body>
        <CustomError {...props} />
      </body>
    </html>
  );
}
