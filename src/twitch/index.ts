import * as dotenv from 'dotenv';
import * as request from 'request-promise-native';
// import * as request from 'request';
import { Channel } from '../server/models/channels';
import mongoose = require('mongoose');
mongoose.Promise = global.Promise;
dotenv.config();

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env
    .DB_HOST}`,
  { useMongoClient: true },
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error'));
db.once('open', (): void => {
  // Do something here if needed
});

async function getStreams(numberToGet: number) {
  const httpOptions = {
    headers: {
      'Client-Id': process.env.TWITCH_CLIENT_ID,
    },
    url: 'https://api.twitch.tv/kraken/streams/',
  };
  console.log('Running...');

  let body = await request(httpOptions)
  console.log('Recieved response from twitch');
  const info = JSON.parse(body);
  for (let i = 0; i < numberToGet; i++) {
    const stream = info.streams[i];
    console.log('ID: ', stream._id);
    console.log('Viewers: ', stream.viewers);
    console.log('Name: ', stream.channel.display_name);
    console.log('URL: ', stream.channel.url);
    const channels = await findRecord(stream._id);
    if (channels) {
      console.log('Found channel: ', channels);
    } else {
      console.log('Did not find channel: ', channels);

      const channel = new Channel(
        {
          _id: stream._id,
          channelName: stream.channel.display_name,
          channelURL: stream.channel.url,
          currentViewers: stream.viewers,
        }
      );
      const record = await channel.save();
      console.log('The record that was saved: ', record);
    }
    console.log();
  });
  return;
}

async function findRecord(id) {
  const channel = await Channel.findById(id);
  return channel;
}

async function run() {
  await getStreams(2);
  db.close();
}

// console.log('test');

run();



