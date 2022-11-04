import { Endpoint, ServiceFactory } from "../../generators/FactoryAPI";
import RoomModel from "../../data/models/RoomModel";

const deleteOneById = ( id: string ) => {
    try {
        return RoomModel.findByIdAndDelete( id );
    } catch (error) {
        return( error );
    }
};

const getOne = ( id: string ) => {
    try {
        const endp: Endpoint = { type: "GET_ONE", body: id }

        return ServiceFactory.create(endp, RoomModel);
    } catch ( error ) {
        return( error );
    }
};

const getAll = () => {
    try {
        return RoomModel.find();
    } catch ( error ) {
        return( error );
    }
};

const getCount = () => {
    try {
        return RoomModel.count();
    } catch ( error ) {
        return( error );
    }
};

export {
    deleteOneById,
    getOne,
    getAll,
    getCount,
};