import { IS_PRODUCTION } from "@/constants/constants";
import logger from "@/lib/logger";

const log = logger.getSubLogger({ prefix: ["[redactError]"] });

function shouldRedact<T extends Error>(_error: T) {
  return (
    // error instanceof Prisma.PrismaClientInitializationError ||
    // error instanceof Prisma.PrismaClientKnownRequestError ||
    // error instanceof Prisma.PrismaClientUnknownRequestError ||
    // error instanceof Prisma.PrismaClientValidationError
    false
  );
}

export const redactError = <T extends Error | unknown>(error: T) => {
  if (!(error instanceof Error)) {
    return error;
  }

  log.debug("Type of Error: ", error.constructor);

  if (shouldRedact(error) && IS_PRODUCTION) {
    log.error("Error: ", JSON.stringify(error));
    return new Error("An error occured while querying the database.");
  }
  return error;
};
