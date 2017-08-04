import { Application, Request, Response, Router } from 'express';
import { Document, Error } from 'mongoose';
import { Channel } from '../models/channels';

/**
 * Defines the route for the channels endpoint.
 *
 * @param app express application
 * @param router express router
 */
function route(app: Application, router: Router): void {
  router.route('/channels').get((req: Request, res: Response): void => {
    Channel.find((err: Error, channels): Response => {
      if (err) {
        return res.send(err);
      }
      return res.send(channels);
    });
  });
}

export default route;
