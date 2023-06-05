import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../data/models/UserModel";
import logger from "../logging/logger";

function signTokenMiddleware(req: Request, res: Response) {
    // const userData = UserModel.findOne({ username: user });
    
    if( !req.body ) {
        res.status(400).json({ "msg": "No auth data provided" });
        return;
    }

    if( !req.body.username ) {
        res.status(400).json({ "msg": "No username provided" });
        return;
    }
    
    if( !req.body.password ) {
        res.status(400).json({ "msg": "No password provided" });
        return;
    }

    jwt.sign({ "username": req.body.username, "password": req.body.password }, process.env.TOKEN_SECRET, (err: any, token: any) => {
        if(err) {
            res.status(501).json({ "msg": "Error creating token" });
            return;
        }

        res.status(200).json({"x-access-token": token});
    });
}

function verifyTokenMiddleware(req: Request, res: Response) {
    // jwt.verify(token, process.env.TOKEN_SECRET);
    if(!req.headers['authorization']) {
        logger.error("No authorization data was provided for the verify token middleware");
        res.status(400).json({"msg": "No data provided in the middleware"})
    }
}

export { signTokenMiddleware, verifyTokenMiddleware };
