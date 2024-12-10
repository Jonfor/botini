import { pino } from "pino";
import pretty from "pino-pretty";

export const logger = () => {
  if (pretty.isColorSupported) {
    logger = pino({
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    });
  } else {
    logger = pino();
  }

  return logger;
};
