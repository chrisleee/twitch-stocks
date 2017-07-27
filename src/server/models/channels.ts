import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Class that the schema is created as by mongoose
export interface IChannel extends mongoose.Document {
  _id: string;
  channelID: string;
  averageViewers: {
    allTime: number;
    month: number;
    week: number;
    day: number;
  };
  currentViewers: number;
  peakViewers: {
    allTime: number;
    month: number;
    week: number;
    day: number;
  };
  channelStock: string; // Add the correct type later
}

// Mongoose schema
const channelSchema = new Schema({
  averageViewers: {
    allTime: Number,
    day: Number,
    month: Number,
    week: Number,
  },
  channelID: String,
  channelStock: String, // Add the correct type later
  currentViewers: Number,
  peakViewers: {
    allTime: Number,
    day: Number,
    month: Number,
    week: Number,
  },
});

export const Channel = mongoose.model<IChannel>('Channel', channelSchema);