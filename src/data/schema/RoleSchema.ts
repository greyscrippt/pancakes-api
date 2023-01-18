import { Schema } from "mongoose";

const RoleSchema = new Schema({
    name: {
        type: String,
    },
});

export default RoleSchema;
