import express, { Request, Response, Router, json } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

import cors from 'cors';

import { RoomRoutes } from './routes/roomRouter';
import logger from './logging/logger';
import { createUserMiddleware, signTokenMiddleware, verifyTokenMiddleware } from './middleware/auth';
import { exit } from 'process';

export function createAppInstance() {
    logger.info("Creating server app instance")

    const masterRouter = Router();
    const app = express();

    dotenv.config();

    const MONGO_URL: string = (!process.env.DATABASE_URL) ? "" : process.env.DATABASE_URL;

    if( MONGO_URL == "" ) {
        logger.error("Could not get database url from .env!");
        return;
    }
    
    logger.info("Connecting to MongoDB...");
    mongoose.connect(MONGO_URL).then(() => {
        logger.info("Database connection established");

        app.use(json());
        app.use(cors());
        
        logger.info("Setting up routes");
        masterRouter.get('/ping', (_req: Request, res: Response) => res.status(200).json("pong"));

        masterRouter.get('/authPing', verifyTokenMiddleware, (_req: Request, res: Response) => res.status(200).json("authPong"));
        masterRouter.post('/signToken', signTokenMiddleware);
        masterRouter.post('/createUser', createUserMiddleware);

        masterRouter.use('/rooms', RoomRoutes);

        app.use('/api', masterRouter);

        process.on('exit', () => {
            logger.info("Closing server");
            mongoose.disconnect()
        });
        
        logger.info("App created successfully!")
    }).catch((error) => {
        logger.error("Could not connect to MongoDB\n" + error);
        exit();
    });

    return app;
}
