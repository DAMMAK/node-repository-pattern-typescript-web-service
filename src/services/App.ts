import express from "express";
import cors from "../middlewares/cors";

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.app.use(cors);
  }
}
export default new App().app;
