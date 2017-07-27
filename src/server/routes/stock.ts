import { Application, Request, Response, Router } from 'express';
import { Document, Error } from 'mongoose';
import { Channel } from '../models/channels';
import { Stock } from '../models/stock';

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
        { _id: '5976de9de8a23379f8d63d38' },
        (err: Error, channel: Document): void => {
          if (err) {
            res.send(err);
            return;
          } else if (channel === undefined) {
            res.send('Error retreiving channel record');
            return;
          }
          const stock = new Stock({
            channel: channel._id,
            id: 'Testing',
          });
          stock.save((saveErr: Error, record: Document): Response => {
            if (saveErr) {
              return res.send(saveErr);
            }
            return res.send({ message: 'stock created', record });
          });
        },
      );
    });
}

export default route;
