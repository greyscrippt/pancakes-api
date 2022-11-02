import express from "express";
import GuestModel from "../../data/models/GuestModel";
import * as GuestService from "../services/GuestService";

async function getOne( req: express.Request, res: express.Response ) {
    try{
        const data = await GuestService.getOne( req.params.id );
        res.status( 200 ).json( data );
    }
    catch( error: any ){
        res.status( 500 ).json({ message: error.message });
    }
}

async function getCount(req: express.Request, res: express.Response) {
    try{
        const data = await GuestService.getCount();

        res.status(200).json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

async function getAll(req: express.Request, res: express.Response) {
    try{
        const data = await GuestService.getAll();

        res.status(200).json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

async function postOne(req: express.Request, res: express.Response) {
    try {
        const data = new GuestModel( req.body );
        const saved = await data.save();

        res.status(200).json( { id: saved._id} );
    } catch( error ) {
        res.status(500).send( error );
    };
}

// TODO: Migrate this to GuestService.
async function updateOneById(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        if( !id ) {
            throw new Error("No ID is provided for the updateById function");
        }

        if( !updatedData ) {
            throw new Error("No updated data is provided for the updateById function");
        }

        const result = await GuestModel.findByIdAndUpdate(
            id, updatedData, options
        );

        res.status(200).send(result)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

async function deleteOneById(req: express.Request, res: express.Response) {
    try{
        const result = await GuestService.deleteOneById(req.params.id);

        res.status(200).send(result);
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

const GuestController = {
    deleteOneById,
    getOne,
    getAll,
    getCount,
    postOne,
    updateOneById,
};

export default GuestController;