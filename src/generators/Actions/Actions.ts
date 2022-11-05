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
    {
        type: "UPDATE_BY_ID",
        action: (model: Model<any>, body: any) => {
            return(model.findByIdAndUpdate( body.id, body.updatedData, body.options ));
        },
    },
    {
        type: "POST_ONE",
        action: async (model: Model<any>, body: any) => {
            const data = new model(body);
            const res  = await data.save();
            return({ id: res._id });
        },
    },
];

export default Actions;