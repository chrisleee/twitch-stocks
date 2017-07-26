import * as dotenv from 'dotenv';
import * as express from 'express';
import { WebAPI } from './application';
dotenv.config();
const port = 3001;

const api = new WebAPI(express(), port);
api.run();

export default api.app;
