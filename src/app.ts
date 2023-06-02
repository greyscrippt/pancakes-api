import express, { Router, json } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

import cors from 'cors';

import { RoomRoutes } from './routes/roomRouter';
import logger from './logging/logger';

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
        masterRouter.get('/ping', (req, res) => res.status(200).send("pong"));
        masterRouter.use('/rooms', RoomRoutes);

        app.use('/api', masterRouter);
        
        logger.info("App created successfully!")
    }).catch((error) => {
        logger.error("Could not connect to MongoDB\n" + error);
        return;
    });

    return app;
}
