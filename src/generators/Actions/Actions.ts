import { Model } from "mongoose";

/** Abstraction layer between MongoDB queries and the rest of the application
 */

const Actions = [
    {
        type: "GET_BY_ID",
        action: (model: Model<any>, id: string) => model.findById( id ),
    },
    {
        type: "GET_ALL",
        action: (model: Model<any>) => model.find(),
    },
    {
        type: "GET_COUNT",
        action: (model: Model<any>) => model.count(),
    },
    {
        type: "DELETE_BY_ID",
        action: (model: Model<any>, id: string) => model.findByIdAndDelete( id ),
    },
    {
        type: "UPDATE_BY_ID",
        action: (model: Model<any>, body: any) => model.findByIdAndUpdate( body.id, body.updatedData, body.options ),
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
