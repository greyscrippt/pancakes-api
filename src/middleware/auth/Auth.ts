import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import UserModel from "../../data/models/UserModel";

import TokenManager from "./token-manager";

async function login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username, password })
        if (!user) {
            res.status(401).json({
                message: "Login not successful",
                error: "User not found",
            })
        } else {
            const token = TokenManager.signToken(user);
            res.status(200).json({
                message: "Login successful",
                user: user,
                token: token,
            })
        }
    } catch (error: any) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
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
