import { NextFunction, Request, Response, Router } from "express";
import express from "express";
import MainController from "../controllers/MainController";

export default new class MainRoutes {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.route();
  }

  private route(): void {
    this.router.get("/", MainController);
  }
}().router;
