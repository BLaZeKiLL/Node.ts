import express from 'express';
import bodyParser from 'body-parser';
import { Express } from 'express';

import IndexRoutes from '../Routes/index';

export const Router = express.Router();

export class App {

  private static _Context: App;

  public static get Context(): Express {
    if (this._Context == undefined) {
      this._Context = new App();
    }
    return this._Context.app;
  }

  private app: Express;

  private constructor() {
    this.app = express();

    this.setupBodyParser();
    this.setupRoutes();
  }

  private setupBodyParser() {
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.text());
    this.app.use(bodyParser.json({ type: 'application/json'}));
  }

  private setupRoutes() {
    this.app.use('/', IndexRoutes);
  }

}
