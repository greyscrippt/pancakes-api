import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      silent: (process.env.SILENT_LOGGER) ? true : false,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.timestamp(),
      )
    }),
  ],
});

export default logger;
