import {NextFunction, Request, Response} from "express";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // tslint:disable-next-line:curly
  if (typeof err === "string") return res.status(400).json({message: err});
  // tslint:disable-next-line:curly
  if (err.name === "UnauthorizedError")
    return res.status(401).json({message: "Invalid Token"});

  return res.status(500).json({message: err.message});
};
