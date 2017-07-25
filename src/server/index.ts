import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';
import channel from './routes/channels';
dotenv.config();
const port = 3001;
const app = express();
const router = express.Router();

app.use(bodyParser.json());

// Connect to database using vars from .env file
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env
    .DB_HOST}`,
  { useMongoClient: true },
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', (): void => {
  // console.log('Database connected');
});

app.use('/', router);
channel(app, router);

app.listen(port, (): void => {
  // console.log(`Listening on port ${port}`);
});
