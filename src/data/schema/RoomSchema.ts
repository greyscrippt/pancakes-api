import { Schema } from "mongoose";

const RoomSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    number_of_beds: {
        required: false,
        type: Number,
    },
});

export default RoomSchema;
