import { NextFunction, Request, Response, Router } from "express";

// export default new class MainController {
//   public Index() {

//     res.send("Welcome to the main controller").status(200);
//   }
// }();

export default (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to the main controller").status(200);
  next();
};
