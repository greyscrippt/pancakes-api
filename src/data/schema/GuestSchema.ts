import { Schema } from "mongoose";

const GuestSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
});

export default GuestSchema;
