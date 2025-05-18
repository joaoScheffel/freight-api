import dotenv from 'dotenv'

export default class EnvConfig {
    static PORT: number
    static GOOGLE_AUTH_ID: string
    static GOOGLE_AUTH_SECRET: string
    static DB_HOSTNAME: string
    static DB_USERNAME: string
    static DB_PASSWORD: string
    static DB_DATABASE: string

    static validateVariables(): void {
        dotenv.config()

        this.PORT = Number(process.env.PORT) || null
        this.GOOGLE_AUTH_ID = process.env.GOOGLE_AUTH_ID || null
        this.GOOGLE_AUTH_SECRET = process.env.GOOGLE_AUTH_SECRET || null
        this.DB_HOSTNAME = process.env.DB_HOSTNAME || null
        this.DB_USERNAME = process.env.DB_USERNAME || null
        this.DB_PASSWORD = process.env.DB_PASSWORD || null
        this.DB_DATABASE = process.env.DB_DATABASE || null

        const requiredVariables: string[] = [
            'PORT',
            'GOOGLE_AUTH_ID',
            'GOOGLE_AUTH_SECRET',
            'DB_HOSTNAME',
            'DB_USERNAME',
            'DB_PASSWORD',
            'DB_DATABASE'
        ]
        for (const variable of requiredVariables) {
            if (!this[variable]) {
                throw new Error(`Environment variable is not set: ${variable}`)
            }
        }
    }
}