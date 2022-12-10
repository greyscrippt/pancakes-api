import { Router } from "express";

import * as Auth from "../middleware/auth/Auth";

const UserRoutes = Router();

UserRoutes.post("/register", Auth.register);
UserRoutes.post("/signToken", Auth.signToken);

export default UserRoutes;
