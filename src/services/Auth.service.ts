import { OAuth2Client } from "google-auth-library";
import EnvConfig from "../configs/Env.config";
import UnauthorizedError from "../errors/Unauthorized.error";
import {AuthorizedUserRepository} from "../repositories/AuthorizedUser.repository";
import {AuthorizedUser} from "../models/AuthorizedUser.model";

export class AuthService {
    private client: OAuth2Client;

    constructor() {
        this.client = new OAuth2Client(EnvConfig.GOOGLE_AUTH_ID);
    }

    async getMe(token: string): Promise<AuthorizedUser | undefined> {
        const email = await this.validateToken(token)
        if (!email?.length) throw new UnauthorizedError()

        return await new AuthorizedUserRepository().getAuthorizedUserByEmail(email)
    }

    private async validateToken(token: string): Promise<string> {
        try {
            const ticket = await this.client.verifyIdToken({
                idToken: token,
                audience: EnvConfig.GOOGLE_AUTH_ID,
            });
            const payload = ticket.getPayload()
            return payload?.email
        } catch (error) {
            throw new UnauthorizedError()
        }
    }
}