import RestError from './Rest.error'

export default class UnprocessableEntityError extends RestError {
    constructor(userMessage: string) {
        super(userMessage, 422)
        this.name = 'UnprocessableEntityError'
    }
}
