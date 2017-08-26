import { Application, Request, Response, Router } from 'express';
import { Document, Error } from 'mongoose';
import { User } from '../models/users';
import { logger } from './../logger';

function route(app: Application, router: Router): void {
  router.route('/register').post((req: Request, res: Response): void => {
    const user = new User({
      _id: req.body._id,
      email: req.body.email ? req.body.email : undefined,
      password: req.body.password,
    });
    user.save((saveErr: Error, record: Document): Response => {
      if (saveErr) {
        logger.warn(`Error creating user: ${req.body._id}`, saveErr.toString());
        return res.send(saveErr);
      }
      logger.info(`Created new user`, record);
      return res.send({ message: 'user created', record });
    });
  });
}

export default route;
