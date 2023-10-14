import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
export const SECRET = "secretcourseapp";

export function authenticateJwt(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, SECRET, (err, payload) => {
            if (err) {
                return res.send(err.message).status(403)
            }
            if (!payload) {
                return res.sendStatus(403);
            }
            if (typeof payload === "string") {
                return res.sendStatus(403)
            }

            req.headers["userId"] = payload.id;
            return next();
        });
    }
    return res.sendStatus(401)

}