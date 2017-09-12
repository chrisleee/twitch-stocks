import { Application, Request, Response, Router } from 'express';
import { Document, Error } from 'mongoose';
import { User } from '../models/users';
import { logger } from './../logger';

function route(app: Application, router: Router) {
  router.route('/register').post((req: Request, res: Response) => {
    const username = req.body._id ? req.body._id : '';
    logger.info(username);
    if (!validateUsername(username)) {
      logger.warn('No valid username given');
      res.status(400);
      return res.send(
        JSON.stringify({ err: true, message: 'Invalid username given' }),
      );
    }
    const email = req.body.email ? req.body.email : '';
    if (!validateEmail(email)) {
      logger.warn('No valid email given');
      res.status(400);
      return res.send(
        JSON.stringify({ message: 'Invalid email address given', err: true }),
      );
    }
    const password = req.body.password ? req.body.password : '';
    if (!validatePassword(password)) {
      logger.warn('Invalid password given');
      res.status(400);
      return res.send(
        JSON.stringify({ err: true, message: 'Invalid password given' }),
      );
    }
    const user = new User({
      _id: username,
      email,
      password,
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

function validatePassword(password: string) {
  if (password.match(/^\S{6,32}$/)) {
    return true;
  }
  return false;
}

function validateUsername(username: string) {
  if (username.match(/^[a-z0-9_-]{3,15}$/)) {
    return true;
  }
  return false;
}

/**
 * Checks an email against a regex from http://emailregex.com/ to ensure validity
 * @param email Address to validate
 */
function validateEmail(email: string) {
  if (
    email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  ) {
    return true;
  }
  return false;
}

export default route;
