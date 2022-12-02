import { NextFunction, Request, Response } from "express";

import UserModel from "../../data/models/UserModel";

// import TokenManager from "./token-manager";

async function login(req: Request, res: Response, next: NextFunction) {
    const user_data     = req.body;
    const user_detail   = await UserModel.findOne(user_data);

    const user          = { username: user_detail.username, password: user_detail.password };

    try {
        if(!user) {
            res.status(404).json("User not found");
        }
    } catch (error: any) {
        res.status(400).json(error.message);
        next();
    }
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
    login,
    register,
};
