import * as mongoose from 'mongoose';
import {
  IViewer,
  IViewerContainer,
  viewerContainerSchema,
  viewerSchema,
} from './viewerContainer';

const Schema = mongoose.Schema;

// Class that the schema is created as by mongoose
export interface IChannel extends mongoose.Document {
  _id: string;
  channelId: string;
  channelName: string;
  channelURL: string;
  averageViewers: IViewerContainer;
  currentViewers: number;
  lastUpdated: string;
  iterations: number;
  peakViewers: IViewerContainer;
  channelStock: string; // Add the correct type later
}

// Mongoose schema
const channelSchema = new Schema(
  {
    averageViewers: viewerContainerSchema,
    channelId: { type: String, required: true },
    channelName: { type: String, required: true },
    channelStock: String, // Add the correct type later
    channelURL: String,
    currentViewers: Number,
    lastUpdated: String,
    peakViewers: viewerContainerSchema,
  },
  { minimize: false },
);

export const Channel = mongoose.model<IChannel>('Channel', channelSchema);
