import { createAppInstance } from "./app";
import dotenv from "dotenv";

dotenv.config();

const port  = process.env.API_PORT;
const app   = createAppInstance();

app.listen(port);

