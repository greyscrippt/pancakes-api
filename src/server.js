import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import addToLogs from './logging/logger.js';
import routes from './routes/routes.js';

dotenv.config();

console.log(process.env.STARTUP_MSG);
addToLogs('Initializing API server.');

addToLogs('Loading MongoDB database url...');
const mongodb_url = process.env.DATABASE_URL;
addToLogs('Creating express instance...');
const app = express();
addToLogs('Express instance created sucessfully!');

addToLogs('Connecting to MongoDB with URL...');
mongoose.connect(mongodb_url);
addToLogs('Creating database client instance...');
const database = mongoose.connection

addToLogs('Loading API routes...');
app.use('/api', routes)

database.on('error', (error) => {
    addToLogs(error);
})

database.once('connected', () => {
    addToLogs('Database connection established!');
})

app.use(json());

app.listen(3000, () => {
    addToLogs(`Server Started at ${3000}`)
})