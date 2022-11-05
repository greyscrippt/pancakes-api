import { Model } from "mongoose";

import ActionType from "../CommonTypes/ActionType";
import ControllerMiddleware from "./ControllerMiddleware/ControllerMiddleware";

const Controllers: ActionType[] = [
    {
        type: "GET_BY_ID",
        action: ( model: Model<any> ) => {
            return( ControllerMiddleware.getOneById( model ));
        }
    },
    {
        type: "DELETE_BY_ID",
        action: ( model: Model<any> ) => {
            return( ControllerMiddleware.deleteOneById( model ));
        }
    },
    {
        type: "UPDATE_BY_ID",
        action: ( model: Model<any> ) => {
            return( ControllerMiddleware.updateOneById( model ));
        }
    },
    {
        type: "GET_COUNT",
        action: ( model: Model<any> ) => {
            return( ControllerMiddleware.getCount( model ));
        }
    },
    {
        type: "GET_ALL",
        action: ( model: Model<any> ) => {
            return( ControllerMiddleware.getAll( model ));
        }
    },
    {
        type: "POST_ONE",
        action: ( model: Model<any> ) => {
            return( ControllerMiddleware.postOne( model ));
        }
    },
];

export default Controllers;