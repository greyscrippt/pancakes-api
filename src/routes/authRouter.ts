import { Router } from "express";
import { signUser, verifyUser } from "../middleware/auth/AuthMiddleware";

const authRouter = Router();

authRouter.use( "/signUser", signUser );
authRouter.use( "/verifyUser", verifyUser );

export default authRouter;
