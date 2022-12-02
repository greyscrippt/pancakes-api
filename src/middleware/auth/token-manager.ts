import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

import {
    NextFunction,
    Request,
    Response
} from 'express';

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const generateToken = (data: any, config: any) => {
    return jwt
        .sign(
            data,
            TOKEN_SECRET,
            config,
        );
}

const signToken = (data: any) => {
    return generateToken(data, { expiresIn: '1h' });
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.body;

    if( authHeader == null ) return res.status(401).send("Request body is empty!\n");

    const token = JSON.parse(authHeader);

    if( token == null ) return res.sendStatus(401);

    jwt.verify( token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        console.log(err);

        if(err) return res.status(403).json({ error: err });

        res.status(200).json(user);

        next();
    });
}

const TokenManager = {
    signToken,
    verifyToken,
};

export default TokenManager;
