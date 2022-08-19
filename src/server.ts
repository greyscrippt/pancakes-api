import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import addToLogs from './logging/logger';
import RoomRoutes from './routes/roomRouter';
import GuestRoutes from './routes/guestRouter';

dotenv.config();

console.log(process.env.STARTUP_MSG);

addToLogs('Loading MongoDB database url...');
const mongodb_url: string = (!process.env.DATABASE_URL) ? "" : process.env.DATABASE_URL; // TODO: find more elegant solution to this line.

addToLogs('Connecting to MongoDB with URL and creating database client instance...');
mongoose.connect(mongodb_url);
const database = mongoose.connection;


database.on('error', (error) => {
    addToLogs(error);
})


database.once('connected', () => {
    addToLogs('Database connection established! Initializing API server...');

    addToLogs('Creating express instance...');
    const app = express();
    app.use(json());
    addToLogs('Express instance created sucessfully!');

    addToLogs('Loading API routes...');

    addToLogs('--Loading rooms routes...'); // TODO: check if this log is elegant
    app.use('/rooms', RoomRoutes);

    addToLogs('--Loading guests routes...'); // TODO: check if this log is elegant
    app.use('/guests', GuestRoutes);

    addToLogs('Loading of routes completed!');

    app.listen(process.env.API_PORT, () => {
        addToLogs(`Server started at ${process.env.API_PORT}`);
    });
});