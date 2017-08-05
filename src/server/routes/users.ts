import { Application, Request, Response, Router } from 'express';
import { Document, Error } from 'mongoose';
import { logger } from '../../logger';
import { User } from '../models/users';

function route(app: Application, router: Router): void {
  router.route('/users').get((req: Request, res: Response): void => {
    logger.info(`GET /users from ${req.ip}`);
    User.find((err: Error, users): Response => {
      if (err) {
        logger.error('Cannot find users');
        return res.send(err);
      }
      return res.send(users);
    });
  });

  router
    .route('/users/user/:user')
    .get((req: Request, res: Response): void => {
      logger.info(`GET ${req.path} from ${req.ip}`);
      User.findById(req.params.user, (err: Error, user) => {
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
    })
    .post((req: Request, res: Response): void => {
      const user = new User({
        _id: req.body._id,
      });
      user.save((saveErr: Error, record: Document): Response => {
        if (saveErr) {
          return res.send(saveErr);
        }
        logger.info(`Created new user`, record);
        return res.send({ message: 'user created', record });
      });
    });
}

export default route;
