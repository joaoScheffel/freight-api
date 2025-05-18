import { AuthorizedUser } from "../../models/AuthorizedUser.model";

declare global {
    namespace Express {
        interface Request {
            user?: AuthorizedUser;
        }
    }
}