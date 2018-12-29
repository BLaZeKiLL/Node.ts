import express, { Express } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import IndexRoutes from '../Routes/index';

export class App {

  private app: Express;

  constructor(
    private PORT: number,
    private MONGODB_NAME: string
  ) {
    this.app = express();
    this.setupMongoDB();
    this.setupBodyParser();
    this.setupRoutes();
  }

  public listen(callback: () => any): void {
    this.app.listen(this.PORT, callback());
  }

  public getLocalUrl(): string {
    return `http://localhost:${this.PORT}/`;
  }

  private setupMongoDB() {
    mongoose.connect(this.getLocalMongoDBUrl(), { useNewUrlParser: true });
  }

  private setupBodyParser(): void {
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.text());
    this.app.use(bodyParser.json({ type: 'application/json'}));
  }

  private setupRoutes(): void {
    this.app.use('/', IndexRoutes);
  }

  private getLocalMongoDBUrl(): string {
    return `mongodb://localhost:27017/${this.MONGODB_NAME}`;
  }

}
