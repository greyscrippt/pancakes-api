import { model } from "mongoose";
import RoomSchema from "../schema/RoomSchema";

const RoomModel = model('Rooms', RoomSchema);

export default RoomModel;
