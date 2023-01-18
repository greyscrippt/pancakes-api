import { Schema } from "mongoose";

const CompanySchema = new Schema({
    name: {
        type: String,
    },
});

export default CompanySchema;
