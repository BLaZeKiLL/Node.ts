import express from 'express';
import { Router, Express } from 'express-serve-static-core';

export class App {

  private static _Context: App;

  public static get Context(): Express {
    if (this._Context == undefined) {
      this._Context = new App();
    }
    return this._Context.app;
  }

  public static get Router(): Router {
    if (this._Context == undefined) {
      this._Context = new App();
    }
    return this._Context.router;
  }

  private app: Express;
  private router: Router;

  private constructor() {
    this.app = express();
    this.router = express.Router();
  }

}
