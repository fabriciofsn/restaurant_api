import { Router } from "express";
import { homeRouter } from "./home/home.router";

export const router: Router = Router();

router.get('/', homeRouter);
