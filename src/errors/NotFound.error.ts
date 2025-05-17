import RestError from './Rest.error'

export class NotFoundError extends RestError {
    constructor(userMessage: string) {
        super(userMessage, 404)
        this.name = 'NotFoundError'
    }
}
