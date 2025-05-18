import {Request, Response} from "express"
import {AuthService} from "../services/Auth.service"
import {NotFoundError} from "../errors/NotFound.error"
import UnauthorizedError from "../errors/Unauthorized.error"

export class AuthController {
    async getMe(req: Request, res: Response) {
        const authorization = req.headers["authorization"]
        if (!authorization?.length) {
            throw new UnauthorizedError('Bearer token não informado')
        }
        const token = authorization.replace("Bearer ", '')
        if (!token?.length) {
            throw new UnauthorizedError('Bearer token não informado')
        }

        const authorizedUser = await new AuthService().getMe(token)
        if (!authorizedUser) {
            throw new NotFoundError("Usuário não possui empresa cadastrada")
        }
        res.status(200).json({
            message: "Usuário autenticado com sucesso"
        })
    }
}