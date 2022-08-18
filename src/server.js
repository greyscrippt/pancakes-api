import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import addToLogs from './logging/logger.js';
import RoomRoutes from './routes/roomRouter.js';

dotenv.config();

console.log(process.env.STARTUP_MSG);

addToLogs('Loading MongoDB database url...');
const mongodb_url = process.env.DATABASE_URL;

addToLogs('Connecting to MongoDB with URL and creating database client instance...');
mongoose.connect(mongodb_url);
const database = mongoose.connection;


database.on('error', (error) => {
    addToLogs(error);
})


database.once('connected', () => {
    addToLogs('Database connection established!');

    addToLogs('Initializing API server.');

    addToLogs('Creating express instance...');
    const app = express();
    app.use(json());
    addToLogs('Express instance created sucessfully!');

    addToLogs('Loading API routes...');
    addToLogs('-Loading rooms routes...'); // TODO: check if this log is elegant
    app.use('/rooms', RoomRoutes)
    addToLogs('--Routes for rooms added sucessfully!');

    app.listen(3000, () => {
        addToLogs(`Server Started at ${3000}`)
    })
})