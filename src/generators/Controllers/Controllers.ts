import { Model } from "mongoose";
import { Request, Response } from "express";

import ServiceFactory from "../Factories/ServiceFactory";
import ActionType from "../CommonTypes/ActionType";
import ControllerMiddleware from "./ControllerMiddleware/ControllerMiddleware";

const Controllers: ActionType[] = [
    {
        type: "GET_BY_ID",
        action: ( model: Model<any> ) => {
            return( ControllerMiddleware.getOneById( model ));
        }
    }
];

export default Controllers;