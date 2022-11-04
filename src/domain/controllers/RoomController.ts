import { Request, Response, NextFunction } from "express";
import ControllerFactory from "../../generators/Factories/ControllerFactory";
import RoomModel from "../../data/models/RoomModel";
import * as RoomService from "../services/RoomService";

async function getCount(req: Request, res: Response) {
    try{
        const data = await RoomService.getCount();

        res.status(200).json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

async function getAll(req: Request, res: Response) {
    try{
        const data = await RoomService.getAll();

        res.status(200).json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

async function postOne(req: Request, res: Response) {
    try {
        const data = new RoomModel( req.body );
        const saved = await data.save();

        res.status(200).json( { id: saved._id} );
    } catch( error ) {
        res.status(500).send( error );
    };
}

// TODO: Migrate this to RoomService.
async function updateOneById(req: Request, res: Response, next: NextFunction) {
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

        const result = await RoomModel.findByIdAndUpdate(
            id, updatedData, options
        );

        res.status(200).send(result)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

async function deleteOneById(req: Request, res: Response) {
    try{
        const result = await RoomService.deleteOneById(req.params.id);

        res.status(200).send(result);
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

const RoomController = {
    deleteOneById,
    getAll,
    getCount,
    postOne,
    updateOneById,
};

export default RoomController;