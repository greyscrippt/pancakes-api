import { model } from "mongoose";
import GuestSchema from "../schema/GuestSchema";

const RoomModel = model('Guest', GuestSchema);

export default RoomModel;
