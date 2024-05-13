import { router } from "@modules/routers";
import  Express  from "express";

export class Server {
  public app: Express.Application;

  constructor(){
    this.app = Express();
    this.middlewares();
    this.routers();
  }

  private middlewares(){
    this.app.disable('x-powered-by');
    this.app.use(Express.json());
  }

  private routers(){
    this.app.use(router);
  }
}