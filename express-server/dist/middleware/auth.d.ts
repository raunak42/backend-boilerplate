import { Request, Response, NextFunction } from "express";
export declare const SECRET = "secretcourseapp";
export declare function authenticateJwt(req: Request, res: Response, next: NextFunction): any;
