import {Router} from 'express'
import {AuthController} from "../controllers/Auth.controller";

const authRouter = Router()
const authController: AuthController = new AuthController()

authRouter.get("/api/auth/me", authController.getMe)

export default authRouter