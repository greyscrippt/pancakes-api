import { Model } from "mongoose";

import Controllers from "../Controllers/Controllers";
import ActionType from "../CommonTypes/ActionType";

const ControllerFactory = {
    create(type: string, model: Model<any>) {
        return Controllers.find((item: ActionType) => item.type == type).action(model);
    }
};

export default ControllerFactory;