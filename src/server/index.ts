import * as dotenv from 'dotenv';
import * as express from 'express';
import { WebAPI } from './application';
dotenv.config();
const port = 3001;

const api = new WebAPI(express(), port);
api.run();

export const app = api.getApp();
export const server = api.getServer();
