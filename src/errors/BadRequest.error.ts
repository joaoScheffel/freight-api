import RestError from './Rest.error'

export class BadRequestError extends RestError {
    constructor(userMessage: string) {
        super(userMessage, 400)
        this.name = 'BadRequestError'
    }
}
