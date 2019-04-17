import express from "express";
import cors from "../middlewares/cors";
import mainRoute from "../routes/main";
import errorHandler from "../middlewares/err";
import error from "../middlewares/404";

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.injectMiddleWare();
  }

  public injectMiddleWare(): void {
    this.app.use(cors);
    this.app.use(mainRoute);
    this.app.use(errorHandler);
    this.app.use(error);
  }
}
export default new App().app;
