import RestError from './Rest.error'

export default class UnauthorizedError extends RestError {
    constructor(userMessage: string) {
        super(userMessage, 401)
        this.name = 'UnauthorizedError'
    }
}
