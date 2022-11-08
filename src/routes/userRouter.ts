// TODO: organize json payload in CRUD

import { Router } from "express";

import * as Auth from "../middleware/auth/Auth";

const UserRoutes = Router();

UserRoutes.post("/register", Auth.register);

export default UserRoutes;