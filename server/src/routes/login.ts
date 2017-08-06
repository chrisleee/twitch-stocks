import { Application, Request, Response, Router } from 'express';
import * as jwt from 'jsonwebtoken';
import { Document, Error } from 'mongoose';
import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IUser, User } from '../models/users';
import { logger } from './../logger';

const secret = 'secret';

function route(app: Application, router: Router) {
  router.route('/login').post(async (req: Request, res: Response) => {
    logger.debug(req.body);
    let user: IUser | undefined | null;
    try {
      user = await User.findOne({ _id: req.body.username });
      logger.debug(`User attempting to login: ${user}`);
    } catch (e) {
      logger.error(`Error finding user ${req.body.username}`);
      user = undefined;
    }
    if (!user) {
      logger.debug('User is null - not found in db', req.body.username);
      res.status(401).json({ message: 'no such user found' });
      return;
    }
    // Hash the received client password here before comparing to the stored pwd
    if (user.password === req.body.password) {
      const payload = {
        username: user._id,
        email: user.email,
        password: user.password,
      };
      const token = jwt.sign(payload, secret, { expiresIn: '30s' }); // This is set low for testing. Suggest raising to 12h at minimum for production
      res.json({ message: 'auth ok', token });
      return;
    } else {
      res.status(401).json({ message: 'passwords do not match' });
      return;
    }
  });
}

export default route;
