import express from "express";
import RoomModel from "../models/room";

async function getOne(req: express.Request, res: express.Response) {
    try{
        const data = await RoomModel.findById(req.params.id);
        res.json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

async function getAll(req: express.Request, res: express.Response) {
    try{
        const data = await RoomModel.find();
        res.json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}    

async function postOne(req: express.Request, res: express.Response) {
    const data = new RoomModel({
        name: req.query.name,
    });

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave);
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

async function updateById(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const id = req.params.id;
        const updatedData = req.query;
        const options = { new: true };

        const result = await RoomModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export {
    getOne,
    getAll,
    postOne,
    updateById,
};