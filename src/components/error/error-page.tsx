import { HttpError } from "@/lib/http-error";
import type React from "react";

type Props = {
  statusCode?: number | null;
  error?: Error | HttpError | null;
  message?: string;
  /** Display debugging information */
  displayDebug?: boolean;
  children?: never;
};

const defaultProps = {
  displayDebug: false,
};

const ErrorDebugPanel: React.FC<{ error: Props["error"]; children?: never }> = (
  props,
) => {
  const { error: e } = props;

  const debugMap = [
    ["error.message", e?.message],
    ["error.name", e?.name],
    ["error.class", e instanceof Error ? e.constructor.name : undefined],
    ["http.url", e instanceof HttpError ? e.url : undefined],
    ["http.status", e instanceof HttpError ? e.statusCode : undefined],
    ["http.cause", e instanceof HttpError ? e.cause?.message : undefined],
    ["error.stack", e instanceof Error ? e.stack : undefined],
  ];

  return (
    <div className="overflow-hidden bg-default shadow sm:rounded-lg">
      <div className="border-subtle border-t px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-subtle">
          {debugMap.map(([key, value]) => {
            if (value !== undefined) {
              return (
                <div
                  key={key}
                  className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5"
                >
                  <dt className="font-bold text-emphasis text-sm">{key}</dt>
                  <dd className="mt-1 text-emphasis text-sm sm:col-span-2 sm:mt-0">
                    {value}
                  </dd>
                </div>
              );
            }
          })}
        </dl>
      </div>
    </div>
  );
};

export const ErrorPage: React.FC<Props> = (props) => {
  const { message, statusCode, error, displayDebug } = {
    ...defaultProps,
    ...props,
  };

  return (
    <>
      <div className="min-h-screen bg-default px-4">
        <main className="mx-auto max-w-xl pt-16 pb-6 sm:pt-24">
          <div className="text-center">
            <p className="font-semibold text-emphasis text-sm uppercase tracking-wide">
              {statusCode}
            </p>
            <h1 className="mt-2 font-extrabold text-4xl text-emphasis tracking-tight sm:text-5xl">
              {message}
            </h1>
          </div>
        </main>
        {displayDebug && (
          <div className="flex-wrap">
            <ErrorDebugPanel error={error} />
          </div>
        )}
      </div>
    </>
  );
};
