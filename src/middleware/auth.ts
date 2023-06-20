import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import UserModel from "../data/models/UserModel";
import logger from "../logging/logger";

interface UserInterface {
    username:   string,
    password:   string,
    email:      string,
}

function signTokenMiddleware(req: Request, res: Response) {   
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

    // const userData = await UserModel.findOne({ username: req.body.username });

    // if(!userData) {
        // res.status(404).json({ "msg": "User could not be found" });
        // return;
    // }

    jwt.sign({ "username": req.body.username, "password": req.body.password }, process.env.TOKEN_SECRET, (err: any, token: any) => {
        if(err) {
            res.status(501).json({ "msg": "Error creating token" });
            return;
        }

        res.status(200).json({"x-access-token": token});
    });
}

function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-access-token'];

    if(!token) {
        logger.error("No authorization data was provided for the verify token middleware");
        res.status(400).json({"msg": "No data provided in the middleware"})
    }

    const verified = jwt.verify(token as string, process.env.TOKEN_SECRET);

    if(!verified) {
        res.status(400).json({ "msg": "Token could not be verified" })
        return;
    }

    if(verified.username == "nelson" && verified.password == "nelson") {
        next();
        return;
    }

    res.status(400).json({ "msg": "User could not be verified" })
}

async function createUserMiddleware(req: Request, res: Response) {
    const user = req.body;

    if(!user || !user.username || !user.password || !user.email) {
        res.status(400).json({ msg: "No user data provided" })
        return;
    }

    const userExists = await UserModel.exists({ username: user.username, password: user.password });

    if(userExists) {
        res.status(400).json({ msg: "User already exists" });
        return;
    }

    UserModel.create({
        username:   user.username,
        email:      user.email,
        password:   user.password,
        roles:      ["admin"],
    }).then((userCreated) => {
      logger.info("Created user successfully!");
      res.status(200).json({ msg: "Success" })
    }).catch((err) => {
      logger.error(err);
      res.status(400).json({ msg: "Failed to create user" });
    });
}

export { createUserMiddleware, signTokenMiddleware, verifyTokenMiddleware };
