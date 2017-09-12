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
      (req: Request, res: Response) => {
        logger.info(`GET /channels from ${req.ip}`);
        let dbQuery = Channel.find();
        if (req.query.sort) {
          const sortOpts = setSortOrder(req.query.sort);
          dbQuery = dbQuery.sort(sortOpts);
          logger.debug('Sort order is: ', sortOpts);
        }
        if (req.query.limit) {
          const limit = parseInt(req.query.limit, 10);
          dbQuery = dbQuery.limit(limit);
          logger.debug('Query limit is: ', limit);
        }
        dbQuery.exec((err: Error, channels): Response => {
          if (err) {
            logger.error('Cannot find channels');
            return res.send(err);
          }
          return res.send(channels);
        });
      },
    );
}

function setSortOrder(query: string) {
  const sortOpts: any = {};
  const sort = query.split(',');
  if (sort[0] === 'peakViewers') {
    switch (sort[1]) {
      case 'allTime':
        sortOpts['peakViewers.allTime.value'] = 1;
        break;
      case 'month':
        sortOpts['peakViewers.month.value'] = 1;
        break;
      case 'week':
        sortOpts['peakViewers.week.value'] = 1;
        break;
      case 'day':
        sortOpts['peakViewers.day.value'] = 1;
        break;
    }
  } else if (sort[0] === 'averageViewers') {
    switch (sort[1]) {
      case 'allTime':
        sortOpts['averageViewers.allTime.value'] = 1;
        break;
      case 'month':
        sortOpts['averageViewers.month.value'] = 1;
        break;
      case 'week':
        sortOpts['averageViewers.week.value'] = 1;
        break;
      case 'day':
        sortOpts['averageViewers.day.value'] = 1;
        break;
    }
  }
  if (sort[2] && sort[2] === 'desc') {
    for (const key in sortOpts) {
      if (key) {
        sortOpts[key] = -1;
      }
    }
  }
  return sortOpts;
}

export default route;
