import { ServiceFactory } from "../../generators/FactoryAPI";
import RoomModel from "../../data/models/RoomModel";

const deleteOneById = ( id: string ) => {
    try {
        return ServiceFactory.create({ type: "DELETE_BY_ID", body: id }, RoomModel);
    } catch (error) {
        return( error );
    }
};

const getOne = ( id: string ) => {
    try {
        return ServiceFactory.create({ type: "GET_BY_ID", body: id }, RoomModel);
    } catch ( error ) {
        return( error );
    }
};

const getAll = () => {
    try {
        return ServiceFactory.create({ type: "GET_ALL", body: "" }, RoomModel);
    } catch ( error ) {
        return( error );
    }
};

const getCount = () => {
    try {
        return ServiceFactory.create({ type: "GET_COUNT", body: "" }, RoomModel);
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