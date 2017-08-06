import { Application, Request, Response, Router } from 'express';
import { Document, Error } from 'mongoose';
import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Channel } from '../models/channels';
import { logger } from './../logger';

/**
 * Defines the route for the channels endpoint.
 *
 * @param app express application
 * @param router express router
 */
function route(app: Application, router: Router): void {
  router
    .route('/channels')
    .get(
      passport.authenticate('jwt', { session: false }),
      (req: Request, res: Response): void => {
        logger.info(`GET /channels from ${req.ip}`);
        Channel.find((err: Error, channels): Response => {
          if (err) {
            logger.error('Cannot find channels');
            return res.send(err);
          }
          return res.send(channels);
        });
      },
    );
}

export default route;
