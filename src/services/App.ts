import express from "express";
import cors from "../middlewares/cors";
import mainRoute from "../routes/main";
class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.injectMiddleWare();
  }

  public injectMiddleWare(): void {
    this.app.use(cors);
    this.app.use(mainRoute);
  }
}
export default new App().app;
