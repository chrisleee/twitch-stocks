import * as dotenv from 'dotenv';
import { Twitch } from './application';
dotenv.config();

const app = new Twitch();
app.run();
