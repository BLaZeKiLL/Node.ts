import express from 'express';
import bodyParser from 'body-parser';
import { Express } from 'express';

import IndexRoutes from '../Routes/index';

export class App {

  private app: Express;

  constructor(
    private PORT: number
  ) {
    this.app = express();

    this.setupBodyParser();
    this.setupRoutes();
  }

  public listen(callback: () => any): void {
    this.app.listen(this.PORT, callback());
  }

  public getLocalUrl(): string {
    return `http://localhost:${this.PORT}/`;
  }

  private setupBodyParser(): void {
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.text());
    this.app.use(bodyParser.json({ type: 'application/json'}));
  }

  private setupRoutes(): void {
    this.app.use('/', IndexRoutes);
  }

}
