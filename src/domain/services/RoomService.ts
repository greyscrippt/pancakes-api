import RoomModel from "../../data/models/RoomModel";

const deleteOne = ( id: string ) => {
    try {
        return RoomModel.findByIdAndDelete(id);
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

const getMany = () => {
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
    deleteOne,
    getOne,
    getMany,
    getCount,
};