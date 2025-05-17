import RestError from './Rest.error'

export class InternalServerError extends RestError {
    constructor(userMessage: string) {
        super(userMessage, 500)
        this.name = 'InternalServerError'
    }
}
