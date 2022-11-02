import GuestModel from "../../data/models/GuestModel";

const deleteOneById = ( id: string ) => {
    try {
        return GuestModel.findByIdAndDelete( id );
    } catch (error) {
        return( error );
    }
};

const getOne = ( id: string ) => {
    try {
        return GuestModel.findById( id );
    } catch ( error ) {
        return( error );
    }
};

const getAll = () => {
    try {
        return GuestModel.find();
    } catch ( error ) {
        return( error );
    }
};

const getCount = () => {
    try {
        return GuestModel.count();
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