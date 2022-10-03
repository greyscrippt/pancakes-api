import RoomModel from "../../data/models/RoomModel";

const deleteOne = async( id: string ) => {
    try {
        return RoomModel.findByIdAndDelete(id);
    } catch (error) {
        return( error );
    }
};

const getOne = async( id: string ) => {
    try {
        return RoomModel.findById( id );
    } catch ( error ) {
        return( error );
    }
};

const getMany = async() => {
    try {
        return RoomModel.find();
    } catch ( error ) {
        return( error );
    }
};

const getCount = async() => {
    try {
        return await RoomModel.count();
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