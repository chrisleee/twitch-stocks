import * as bodyParser from 'body-parser';
import { Express, Router } from 'express';
import { Server } from 'http';
import * as passport from 'passport';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { logger } from './logger';
import { IUser, User } from './models/users';
import channels from './routes/channels';
import login from './routes/login';
import stock from './routes/stock';
import users from './routes/users';
import mongoose = require('mongoose');
mongoose.Promise = global.Promise;

export class WebAPI {
  private app: Express;
  private server: Server;
  private router: Router;
  private port: number;
  private db: mongoose.Connection;
  /**
   * Set up the express application
   * @param application express application
   * @param portNum port to listen on
   */
  constructor(private application: Express, private portNum: number) {
    this.app = application;
    this.router = Router();
    this.port = portNum;
    this.db = this.openDatabase();
    this.configureMiddleware(this.app);
    this.configureRoutes(this.app, this.router);
  }

  /**
   * Returns the express instance
   */
  public getApp(): Express {
    return this.app;
  }

  /**
   * Returns the http.Server instance used by the express instance
   */
  public getServer(): Server {
    return this.server;
  }

  /**
   * Returns the mongoose connection
   */
  public getDb(): mongoose.Connection {
    return this.db;
  }

  /**
   * Start the application
   */
  public run(): void {
    logger.info(`Listening on port ${this.port}`);
    this.server = this.app.listen(this.port);
  }

  /**
   * Set up the needed routes
   * @param app express application
   * @param router express router
   */
  private configureRoutes(app: Express, router: Router): void {
    app.use('/api', router);
    channels(app, router);
    stock(app, router);
    users(app, router);
    login(app, router);
    // Add more routes here as needed
  }

  /**
   * Set up the needed middleware
   * @param app express application
   */
  private configureMiddleware(app: Express): void {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    this.configurePassport();
    app.use(passport.initialize());
  }

  /**
   * Setup passport with strategies
   */
  private configurePassport() {
    const opts: any = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = 'secret';
    passport.use(
      new JWTStrategy(opts, (payload, done) => {
        logger.debug('JWT payload received: ', payload);
        User.findOne({ _id: payload.username }, (err, user) => {
          if (err) {
            logger.error('Error finding user to authorize');
            return done(err, false);
          }
          if (user) {
            logger.debug('User authorized');
            return done(undefined, user);
          } else {
            logger.debug('User unauthorized');
            return done(undefined, false, { message: 'User not found' });
          }
        });
      }),
    );
  }

  /**
   * Setup passport with strategies
   */
  private configurePassport() {
    const opts: any = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = process.env.JWT_SECRET;
    passport.use(
      new JWTStrategy(opts, (payload, done) => {
        logger.debug('JWT payload received: ', payload);
        User.findOne({ _id: payload.username }, (err, user) => {
          if (err) {
            logger.error('Error finding user to authorize');
            return done(err, false);
          }
          if (user) {
            logger.debug('User authorized');
            return done(undefined, user);
          } else {
            logger.debug('User unauthorized');
            return done(undefined, false, { message: 'User not found' });
          }
        });
      }),
    );
  }

  /**
   * Connects to the mongodb database using credentials in the .env file.
   * Returns the database connection
   */
  private openDatabase(): mongoose.Connection {
    mongoose.connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env
        .DB_HOST}`,
      { useMongoClient: true },
    );
    const db = mongoose.connection;
    db.on('error', () => {
      logger.error(
        'Could not connect to database - please check credentials are correct',
      );
    });
    db.once('open', (): void => {
      logger.info('Database connected');
    });
    return db;
  }
}
