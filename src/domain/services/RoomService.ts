import RoomModel from "../../models/common/room";

const deleteOne = async( id: string ) => {
    try {
        return RoomModel.findByIdAndDelete(id);
    } catch (error) {
        
    }
};

const getOne = async( id: string ) => {
    try {
        return RoomModel.findById( id );
    } catch ( error ) {
        return( error );
    }
};

const getAll = async() => {
    try {
        return RoomModel.find();
    } catch ( error ) {
        return( error );
    }
};

const getCount = async() => {
    try {
        return RoomModel.count;
    } catch ( error ) {
        return( error );
    }
};

const postOne = async( dt: any ) => {
    try {
        const data = new RoomModel( dt );
        const result = data.save();

        return result;
    } catch (error) {
        return error;
    }
};

const updateById = async() => {};

export {
    deleteOne,
    getOne,
    getAll,
    getCount,
    postOne,
    updateById,
};