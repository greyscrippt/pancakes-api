import { Schema } from "mongoose";

const AccommodationSchema = new Schema({
    name: {
        type: String,
    },
});

export default AccommodationSchema;
