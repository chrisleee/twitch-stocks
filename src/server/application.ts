import * as bodyParser from 'body-parser';
import { Express, Router } from 'express';
import { Server } from 'http';
import channels from './routes/channels';
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
    // Add more routes here as needed
  }

  /**
   * Set up the needed middleware
   * @param app express application
   */
  private configureMiddleware(app: Express): void {
    app.use(bodyParser.json());
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
    db.on('error', console.error.bind(console, 'Mongoose connection error'));
    db.once('open', (): void => {
      // Do something here if needed
    });
    return db;
  }
}
