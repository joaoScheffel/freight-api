import {NextFunction, Request, Response} from "express";
import {AuthService} from "../services/Auth.service";
import UnauthorizedError from "../errors/Unauthorized.error";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers["authorization"]
    if (!authorization?.length) {
        throw new UnauthorizedError('Bearer token não informado')
    }
    const token = authorization.replace("Bearer ", '')
    if (!token?.length) {
        throw new UnauthorizedError('Bearer token não informado')
    }

    const authorizedUser = await new AuthService().getMe(token)
    if (!authorizedUser) throw new UnauthorizedError()

    req.user = authorizedUser
    next()
}