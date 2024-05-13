import { Request, Response } from "express";

class Router{
  public homeRouter(req: Request, res: Response){
    res.json({message: 'Teste'});
  }
}

export const homeRouter = new Router().homeRouter;
