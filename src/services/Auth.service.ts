import { OAuth2Client } from "google-auth-library";
import EnvConfig from "../configs/Env.config";

export class AuthService {
    private client: OAuth2Client;

    constructor() {
        this.client = new OAuth2Client(EnvConfig.GOOGLE_AUTH_ID);
    }

    async validateToken(token: string): Promise<string> {
        try {
            const ticket = await this.client.verifyIdToken({
                idToken: token,
                audience: EnvConfig.GOOGLE_AUTH_ID,
            });
            const payload = ticket.getPayload()
            return payload.email
        } catch (error) {
            return
        }
    }
}