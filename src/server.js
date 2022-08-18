import express, { json } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';

const mongoString = process.env.DATABASE_URL

const app = express();

app.use(json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})