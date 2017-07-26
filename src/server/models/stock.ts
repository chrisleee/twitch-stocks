import { Document, model, Schema } from 'mongoose';
import { Channel, IChannel } from './channels';

export interface IStock extends Document {
  id: string;
  name: string;
  totalShares: number;
  price: number;
  sellers: [string];
  buyers: [string];
  channel: IChannel;
}

const stockSchema = new Schema({
  buyers: [String],
  channel: { type: Schema.Types.ObjectId, ref: 'Channel' }, // Reference the channel type
  id: String,
  name: String,
  price: Number,
  sellers: [String],
  totalShares: Number
});

export const Stock = model<IStock>('Stock', stockSchema);
