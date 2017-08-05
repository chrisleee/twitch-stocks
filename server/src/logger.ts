import winston = require('winston');
import * as dotenv from 'dotenv';
import * as moment from 'moment';
// import * as fs from 'fs';
dotenv.config();

const level: string = process.env.LOG_LEVEL || 'warn';

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      level,
      timestamp: () => `[${moment().format('ddd MMM DD HH:mm:ss')}]`,
    }),
  ],
});
