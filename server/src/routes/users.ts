import * as dotenv from 'dotenv';
import { Application, Request, Response, Router } from 'express';
import * as jwt from 'jsonwebtoken';
import { Document, Error } from 'mongoose';
import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../models/users';
import { logger } from './../logger';

function route(app: Application, router: Router): void {
  router
    .route('/users')
    .get(
      passport.authenticate('jwt', { session: false }),
      (req: Request, res: Response): void => {
        logger.info(`GET /users from ${req.ip}`);
        User.find((err: Error, users): Response => {
          if (err) {
            logger.error('Cannot find users');
            return res.send(err);
          }
          return res.send(users);
        });
      },
    );

  router.route('/users/user/:user').get((req: Request, res: Response) => {
    logger.info(`GET ${req.path} from ${req.ip}`);
    if (req.headers && req.headers.authorization) {
      // Get the username from the JWT
      let decoded: any;
      try {
        let token = req.headers.authorization as string;
        token = token.split(' ')[1];
        decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      } catch (e) {
        logger.warn('No valid JWT given');
        res.status(401);
        return res.send(genericError('No valid JWT token given'));
      }
      // Find user and return
      const username = decoded.username;
      if (username !== req.params.user) {
        res.status(401);
        return res.send(genericError('Cannot request data from another user'));
      }
      User.findById(username, (err: Error, user) => {
        if (err) {
          return res.send(err);
        }
        if (!user) {
          logger.info(`Could not find user ${req.params.user}`);
          res.status(404);
          return res.send(JSON.stringify({ Error: 'Unable to find user' }));
        }
        return res.send(user);
      });
    } else {
      logger.error('No authorization headers given');
      res.status(401);
      return res.send(genericError('Invalid authorization headers given'));
    }
  });
}

function genericError(message: string) {
  return JSON.stringify({ err: true, message });
}

export default route;
