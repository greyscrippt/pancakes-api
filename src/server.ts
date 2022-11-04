import express, { Router, json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import cors from 'cors';

import addToLogs from './logging/logger';
import RoomRoutes from './routes/roomRouter';
import GuestRoutes from './routes/guestRouter';

dotenv.config();

console.log(process.env.STARTUP_MSG);

addToLogs('Loading MongoDB database url...');
const MONGO_URL: string = (!process.env.DATABASE_URL) ? "" : process.env.DATABASE_URL; // TODO: find more elegant solution to this line.

addToLogs('Connecting to MongoDB with URL and creating database client instance...');
mongoose.connect(MONGO_URL);
const database = mongoose.connection;

const masterRouter = Router();


database.on('error', (error) => {
    addToLogs(error);
})


database.once('connected', () => {
    addToLogs('Database connection established! Initializing API server...');

    addToLogs('Creating express instance...');
    const app = express();
    app.use( json() );
    app.use( cors() );
    addToLogs('Express instance created sucessfully!');

    addToLogs('Loading API routes...');

    addToLogs('--Loading ping endpoint...'); // TODO: check if this log is elegant
    masterRouter.use('/ping', (req, res) => res.status(200).send("pong"));

    addToLogs('--Loading rooms routes...'); // TODO: check if this log is elegant
    masterRouter.use('/rooms', RoomRoutes);

    addToLogs('--Loading guests routes...'); // TODO: check if this log is elegant
    masterRouter.use('/guests', GuestRoutes);

    app.use('/api', masterRouter);

    addToLogs('Loading of routes completed!');

    app.listen(process.env.API_PORT, () => {
        addToLogs(`Server started at ${process.env.API_PORT}`);
    });
});