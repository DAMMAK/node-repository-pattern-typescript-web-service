import { NextFunction, Request, Response, Router } from "express";
import express from "express";

const router: Router = express.Router();
export default router.get(
  "*",
  (req: Request, res: Response, next: NextFunction) => {
    next(res.json({ message: "Route not available" }));
  },
);
