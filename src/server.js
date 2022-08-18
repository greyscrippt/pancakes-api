import express, { json } from 'express';
import mongoose from 'mongoose';

import routes from './routes.js';

const mongodb_url = "mongodb://127.0.0.1:27017/";

mongoose.connect(mongodb_url);
const database = mongoose.connection

const app = express();
app.use('/api', routes)

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})