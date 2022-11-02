import mongoose from "mongoose";
import GuestSchema from "../schema/GuestSchema";

const GuestModel = mongoose.model('Guest', GuestSchema);

export default GuestModel;
