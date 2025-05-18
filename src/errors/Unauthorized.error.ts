import RestError from './Rest.error'

export default class UnauthorizedError extends RestError {
    constructor(userMessage: string = "Autenticação inválida, entre novamente") {
        super(userMessage, 401)
        this.name = 'UnauthorizedError'
    }
}
