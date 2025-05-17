export default class RestError extends Error {
    readonly statusCode: number

    constructor(userMessage: string, statusCode: number) {
        super(userMessage)
        this.statusCode = statusCode
    }
}
