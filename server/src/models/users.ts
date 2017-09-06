import { Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  ownedStocks: [string]; // Fix these 3 when other models are implemented
  sellingStocks: [string];
  buyingStocks: [string];
  points: number;
  createdAt: string;
  email: string;
  password: string;
  settings: {};
}

const userSchema = new Schema(
  {
    _id: { type: String, required: true },
    buyingStocks: [String],
    email: String,
    ownedStocks: [String],
    password: { type: String, required: true },
    points: Number,
    sellingStocks: [String],
    settings: {},
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>('User', userSchema);
