import { NextFunction, Request, Response } from "express"
import { HttpException } from "../httExecption"

export const httpErrorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    const { status, message } = err as HttpException;
    return res.status(status).json({ error: message });
}