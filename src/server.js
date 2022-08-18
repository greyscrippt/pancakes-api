import express, { json } from 'express';
import mongoose from 'mongoose';

const mongodb_url = "mongodb://127.0.0.1:27017/";

mongoose.connect(mongodb_url);
const database = await mongoose.connection

const app = express();

app.use(json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})