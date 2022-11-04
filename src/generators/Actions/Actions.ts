import { Model } from "mongoose";

const Actions = [
    {
        type: "GET_BY_ID",
        action: (model: Model<any>, id: string) => {
            return(model.findById( id ));
        },
    },
    {
        type: "GET_ALL",
        action: (model: Model<any>, id: string) => {
            return(model.find());
        },
    },
    {
        type: "GET_COUNT",
        action: (model: Model<any>, id: string) => {
            return(model.count());
        },
    },
    {
        type: "DELETE_BY_ID",
        action: (model: Model<any>, id: string) => {
            return(model.findByIdAndDelete( id ));
        },
    },
];

export default Actions;