import { model } from "mongoose";
import GuestSchema from "../schema/GuestSchema";

const GuestModel = model('Guest', GuestSchema);

export default GuestModel;
