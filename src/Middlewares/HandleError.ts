import { ValidationError } from "express-validation";
import { Request, Response, NextFunction } from "express";
const { UnauthorizedError } = require("express-jwt");

export default (error: any, req: Request, res: Response, next: NextFunction) => {
  try {
    if (error instanceof ValidationError) {
      return res.status(error.statusCode).json(error);
    }

     if (error instanceof UnauthorizedError) {
      return res.status(error.status).json(error);
    } 
  } catch (error) {
    return res.status(500).json(error);
  }
};