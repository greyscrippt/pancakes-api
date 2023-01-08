import { Model } from "mongoose";

import Controllers from "../Controllers/Controllers";
import ActionType from "../CommonTypes/ActionType";

const ControllerFactory = {
    create(type: string, model: Model<any>) {
        if(!type) console.warn("Empty type");
        if(!model) console.warn("Empty model");

        return Controllers.find((item: ActionType) => item.type == type).action(model);
    }
};

export default ControllerFactory;
