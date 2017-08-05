import { Application, Request, Response, Router } from 'express';
import { Channel } from '../models/channels';
import { Stock } from '../models/stock';
import { logger } from './../logger';
import mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function route(app: Application, router: Router): void {
  router
    .route('/stock')
    .get((req: Request, res: Response): void => {
      logger.info(`GET /stock from ${req.ip}`);
      Stock.find((err: Error, stocks): Response => {
        if (err) {
          logger.error('Error finding stock');
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
        { channelId: '17337557' },
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
            buyers: [],
            channel: channel._id,
            id: 'Testing',
            name: 'DrDisRespect',
            price: 10,
            sellers: [],
            totalShares: 1000,
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
