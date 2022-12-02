// TODO: organize json payload in CRUD

import { Router } from "express";
import TokenManager from "../middleware/auth/token-manager";

import * as Auth from "../middleware/auth/Auth";

const UserRoutes = Router();

UserRoutes.post("/register", Auth.register);
UserRoutes.post("/login", TokenManager.signToken);
UserRoutes.post("/verifyToken", TokenManager.verifyToken);

export default UserRoutes;
