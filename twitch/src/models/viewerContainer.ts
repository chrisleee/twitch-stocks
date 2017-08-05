import * as mongoose from 'mongoose';

export interface IViewer extends mongoose.Types.Subdocument {
  value: number;
  iterations: number;
  lastUpdated: string;
}

export interface IViewerContainer extends mongoose.Types.Subdocument {
  allTime: IViewer;
  month: IViewer;
  week: IViewer;
  day: IViewer;
}

export const viewerSchema = new mongoose.Schema({
  iterations: Number,
  lastUpdated: String,
  value: Number,
});

export const viewerContainerSchema = new mongoose.Schema({
  allTime: viewerSchema,
  day: viewerSchema,
  month: viewerSchema,
  week: viewerSchema,
});
