import express, { Express } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import IndexRoutes from '../Routes/index';

/**
 * The Node-Express Application that will run on the server
 */
export class App {

  /**
   * Express app
   */
  private app: Express;

  /**
   * Creates the App and calls all the setups()
   * @param PORT Port on which the server is to be run
   * @param MONGODB_NAME Database name to be used
   */
  constructor(
    private PORT: number,
    private MONGODB_NAME: string
  ) {
    this.app = express();
    this.setupMongoDB();
    this.setupBodyParser();
    this.setupRoutes();
  }

  /**
   * Express app.listen() wrapper
   * @param callback called whern server is started
   */
  public listen(callback: () => any): void {
    this.app.listen(this.PORT, callback());
  }

  /**
   * @returns local URL of the server
   */
  public getLocalUrl(): string {
    return `http://localhost:${this.PORT}/`;
  }

  /**
   * MongoDB setup
   */
  private setupMongoDB() {
    mongoose.connect(this.getLocalMongoDBUrl(), { useNewUrlParser: true });
  }

  /**
   * Body-Parser setup
   */
  private setupBodyParser(): void {
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.text());
    this.app.use(bodyParser.json({ type: 'application/json'}));
  }

  /**
   * Route setup
   */
  private setupRoutes(): void {
    this.app.use('/', IndexRoutes);
  }

  /**
   * Returns the MongoDb url according to the envoirment
   * @returns MongoDB url
   */
  private getLocalMongoDBUrl(): string {
    if (process.env.NODE_ENV === 'test') {
      return `mongodb://localhost:27017/${this.MONGODB_NAME + '_TEST'}`;
    } else {
      return `mongodb://localhost:27017/${this.MONGODB_NAME}`;
    }
  }

}
