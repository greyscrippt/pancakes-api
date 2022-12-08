import { NextFunction, Request, Response } from "express";

import UserModel from "../../data/models/UserModel";

async function signToken(req: Request, res: Response, next: NextFunction) {
    const user_data = req.body;

    if(!user_data) {
        res.status(401).send("User data is not provided");
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
    register,
};
