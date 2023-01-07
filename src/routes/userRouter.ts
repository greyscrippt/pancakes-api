import { Router } from "express";

import * as Auth from "../middleware/auth/Auth";

const UserRoutes = Router();

UserRoutes.post("/register", Auth.register);
UserRoutes.post("/signToken", Auth.signToken);
UserRoutes.post("/validateToken/:token", Auth.validateToken);

export default UserRoutes;
