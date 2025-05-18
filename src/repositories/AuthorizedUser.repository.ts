import { AppDataSource } from "../configs/DbConnect.config";
import { AuthorizedUser } from "../models/AuthorizedUser.model";

export class AuthorizedUserRepository {
    async getAuthorizedUserByEmail(email: string): Promise<AuthorizedUser | null> {
        const repository = AppDataSource.getRepository(AuthorizedUser)
        const user = await repository.findOneBy({ email })
        return user
    }
}