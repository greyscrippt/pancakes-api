import { Schema } from "mongoose";

const GuestSchema = new Schema({
    first_name: {
        required: true,
        type: String,
    },
    last_name: {
        required: true,
        type: String,
    },
    email: {
        required: false,
        type: String,
    },
});

export default GuestSchema;
