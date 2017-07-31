import { Application, Request, Response, Router } from 'express';
import { Channel } from '../models/channels';
import { Stock } from '../models/stock';
import mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function route(app: Application, router: Router): void {
  router
    .route('/stock')
    .get((req: Request, res: Response): void => {
      Stock.find((err: Error, stocks): Response => {
        if (err) {
          return res.send(err);
        }
        return res.send(stocks);
      })
        .populate('channel')
        .exec();
    })
    .post((req: Request, res: Response): void => {
      // Example using object references
      Channel.findOne(
        { channelId: '25886424464' },
        (err: mongoose.Error, channel: mongoose.Document): void => {
          if (err) {
            res.send(err);
            return;
          }
          if (!channel) {
            res.send('Error retreiving channel record');
            return;
          }
          const stock = new Stock({
            channel: channel._id,
            id: 'Testing',
          });
          stock.save(
            (saveErr: mongoose.Error, record: mongoose.Document): Response => {
              if (saveErr) {
                return res.send(saveErr);
              }
              return res.send({ message: 'stock created', record });
            },
          );
        },
      );
    });
}

export default route;
