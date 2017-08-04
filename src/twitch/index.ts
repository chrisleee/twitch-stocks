import * as dotenv from 'dotenv';
import { Application } from './application';
dotenv.config();

const app = new Application();
app.getStreams();
