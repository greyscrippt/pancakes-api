import { NextFunction, Request, Response } from "express";
// import bcrypt from "bcrypt";

import TokenManager from "./TokenManager";
import UserModel from "../../data/models/UserModel";

function signToken(req: Request, res: Response) {
    const user_data = req.body;

    if(!user_data.username || !user_data.password) res.status(400).send("User data is incomplete");

    UserModel.findOne({username: user_data.username}).then((user) => {
        res.status(200).send(user_data);
    }).catch((err) => {
        res.status(404).send("User not found");
    });
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
