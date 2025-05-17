import {Request, Response, NextFunction} from "express";
import RestError from "../errors/Rest.error";

export const errorMiddleware = async (error: RestError, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof RestError) {
        let statusCode = error.statusCode
        let userMessage = error?.message?.length ? error.message : 'Ocorreu um erro, por favor tente novamente'

        if (error.statusCode === 500) {
            userMessage = 'Internal Server Error'
        }
        res.status(statusCode).json({
            message: userMessage
        })
    } else {
        res.status(500).json({
            message: "Ocorreu um erro, por favor tente novamente"
        })
    }
}