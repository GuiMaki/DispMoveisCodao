import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPlayload {
    email: string,
    sub: string,
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub, email } = verify(token, "mobilefatec") as IPlayload;

        return next();
    } catch (error: any) {
        return response.status(401).end(error.message);
    }
}