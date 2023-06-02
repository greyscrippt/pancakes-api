import { Model } from "mongoose";

import Controllers from "../Controllers/Controllers";
import ActionType from "../CommonTypes/ActionType";
import logger from "../../logging/logger";

const ControllerFactory = {
    create(type: string, model: Model<any>) {
        if(!type) {
            logger.error("Empty type in ControllerFactory.create");
            return;
        }
        if(!model) {
            logger.error("Empty model in ControllerFactory.create");
            return;
        }

        return Controllers.find((item: ActionType) => item.type == type).action(model);
    }
};

export default ControllerFactory;
