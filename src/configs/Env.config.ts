import dotenv from 'dotenv'

export default class EnvConfig {
    static PORT: number
    static GOOGLE_AUTH_ID: string
    static GOOGLE_AUTH_SECRET: string
    static DB_URL: string

    static validateVariables(): void {
        dotenv.config()

        this.PORT = Number(process.env.PORT) || null
        this.GOOGLE_AUTH_ID = process.env.GOOGLE_AUTH_ID || null
        this.GOOGLE_AUTH_SECRET = process.env.GOOGLE_AUTH_SECRET || null
        this.DB_URL = process.env.DB_URL || null

        const requiredVariables: string[] = ['PORT', 'GOOGLE_AUTH_ID', 'GOOGLE_AUTH_SECRET', 'DB_URL']
        for (const variable of requiredVariables) {
            if (!this[variable]) {
                throw new Error(`Environment variable is not set: ${variable}`)
            }
        }
    }
}