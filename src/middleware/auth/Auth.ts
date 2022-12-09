import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";

import TokenManager from "./TokenManager";
import UserModel from "../../data/models/UserModel";

async function signToken(req: Request, res: Response, next: NextFunction) {
    const user_data = req.body;

    if(!user_data) {
        res.status(400).send("User data is not provided");
        next();
    }

    if(!user_data.username || !user_data.password) {
        res.status(400).send("User data is incomplete");
        next();
    }

    const user = await UserModel.findOne({username: user_data.username});

    if(!user) {
        res.status(400).send("User not found");
        next();
    }

    const result = await bcrypt
        .compare(user.password, user_data.password);

    if(!result) {
        res.status(400).send("Password invalid");;
        next();
    }

    const jwt_token = TokenManager.generateToken(user.username);

    res.status(200).json(jwt_token);

}

async function register(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body
    if (password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" })
    }
    try {
        await UserModel.create({
            username,
            password,
        }).then(user => {
            res.status(200).json({
                message: "User successfully created",
                user,
            })
        });
    } catch (err: any) {
        res.status(401).json({
            message: "User not successful created",
            error: err.message,
        })
    }
    next();
}

export {
    register,
    signToken,
};
