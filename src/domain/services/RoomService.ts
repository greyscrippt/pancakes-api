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
        return RoomModel.findById( id );
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