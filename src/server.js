import express, { json } from 'express';
import mongoose from 'mongoose';

import routes from './routes/routes.js';

const startupMessage = "\n\n\n" +
"    ███╗░░░███╗██╗███╗░░██╗██╗  ███████╗██████╗░██████╗░  ░█████╗░██████╗░██╗ " + '\n' +
"    ████╗░████║██║████╗░██║██║  ██╔════╝██╔══██╗██╔══██╗  ██╔══██╗██╔══██╗██║ " + '\n' +
"    ██╔████╔██║██║██╔██╗██║██║  █████╗░░██████╔╝██████╔╝  ███████║██████╔╝██║ " + '\n' +
"    ██║╚██╔╝██║██║██║╚████║██║  ██╔══╝░░██╔══██╗██╔═══╝░  ██╔══██║██╔═══╝░██║ " + '\n' +
"    ██║░╚═╝░██║██║██║░╚███║██║  ███████╗██║░░██║██║░░░░░  ██║░░██║██║░░░░░██║ " + '\n' +
"    ╚═╝░░░░░╚═╝╚═╝╚═╝░░╚══╝╚═╝  ╚══════╝╚═╝░░╚═╝╚═╝░░░░░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝ " + '\n\n' +

"    ░██████╗███████╗██████╗░██╗░░░██╗███████╗██████╗░ " + '\n' +
"    ██╔════╝██╔════╝██╔══██╗██║░░░██║██╔════╝██╔══██╗ " + '\n' +
"    ╚█████╗░█████╗░░██████╔╝╚██╗░██╔╝█████╗░░██████╔╝ " + '\n' +
"    ░╚═══██╗██╔══╝░░██╔══██╗░╚████╔╝░██╔══╝░░██╔══██╗ " + '\n' +
"    ██████╔╝███████╗██║░░██║░░╚██╔╝░░███████╗██║░░██║ " + '\n' +
"    ╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝ " + '\n\n' +
"    Authored by: Mongark\n\n\n";

const monad = (logs, msg) => {
    const currentLogId = logs.length;

    console.log(
        'Stage ' + currentLogId + ': ' +
        msg
    );

    return [
        ...logs,
        {
            id: currentLogId,
            message: msg,
        }
    ];
};
var logs = [];
const addToLogs = (msg) => (logs = monad(logs, msg));

console.log(startupMessage);
addToLogs('Initializing API server.');

addToLogs('Loading MongoDB database url...');
const mongodb_url = "mongodb://127.0.0.1:27017/";
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
    console.log(error)
})

database.once('connected', () => {
    addToLogs('Database connection established!');
})

app.use(json());

app.listen(3000, () => {
    addToLogs(`Server Started at ${3000}`)
})