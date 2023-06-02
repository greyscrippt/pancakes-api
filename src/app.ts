import express, { Router, json } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

import cors from 'cors';

import { RoomRoutes } from './routes/roomRouter';
import { exit } from 'process';

export function createAppInstance() {
    const masterRouter = Router();
    const app = express();

    dotenv.config();

    const MONGO_URL: string = (!process.env.DATABASE_URL) ? "" : process.env.DATABASE_URL;

    if( MONGO_URL == "" ) {
        console.error("Could not get database url from .env!");
        return;
    }
    
    console.log("Connecting to MongoDB...");
    mongoose.connect(MONGO_URL).then(() => {
        console.log("Database connection established")

        app.use(json());
        app.use(cors());

        masterRouter.get('/ping', (req, res) => res.status(200).send("pong"));
        masterRouter.use('/rooms', RoomRoutes);

        app.use('/api', masterRouter);
    }).catch((error) => {
        console.error("Could not connect to MongoDB");
        console.error(error);
        exit();
    });

    return app;
}
