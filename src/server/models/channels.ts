import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IAverage extends mongoose.Types.Subdocument {
  average: number;
  iterations: number;
  lastUpdated: string;
}

// Class that the schema is created as by mongoose
export interface IChannel extends mongoose.Document {
  _id: string;
  channelId: string;
  channelName: string;
  channelURL: string;
  averageViewers: {
    allTime: IAverage;
    month: IAverage;
    week: IAverage;
    day: IAverage;
  };
  currentViewers: number;
  lastUpdated: string;
  iterations: number;
  peakViewers: {
    allTime: number;
    month: number;
    week: number;
    day: number;
  };
  channelStock: string; // Add the correct type later
}

const averageSchema = new Schema({
  average: Number,
  iterations: Number,
  lastUpdated: String,
});

// Mongoose schema
const channelSchema = new Schema({
  averageViewers: {
    allTime: averageSchema,
    day: averageSchema,
    month: averageSchema,
    week: averageSchema,
  },
  channelId: { type: String, required: true },
  channelName: { type: String, required: true },
  channelStock: String, // Add the correct type later
  channelURL: String,
  currentViewers: Number,
  lastUpdated: String,
  peakViewers: {
    allTime: Number,
    day: Number,
    month: Number,
    week: Number,
  },
});

export const Channel = mongoose.model<IChannel>('Channel', channelSchema);
