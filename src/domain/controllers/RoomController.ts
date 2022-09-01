import express from "express";
import RoomModel from "../../models/common/room";

async function getOne(req: express.Request, res: express.Response) {
    try{
        const data = await RoomModel.findById(req.params.id);
        res.status(200).json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

async function getCount(req: express.Request, res: express.Response) {
    try{
        const count = await RoomModel.count();
        res.status(200).json(count)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

async function getAll(req: express.Request, res: express.Response) {
    try{
        const data = await RoomModel.find();
        res.status(200).json(data)
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
        res.status(500).json({ message: error.message });
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

        res.status(200).send(result)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

async function deleteOne(req: express.Request, res: express.Response) {
    try{
        await RoomModel.deleteOne({ name: req.params.id });
        res.status(200).json(req.params.id)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
}

export {
    deleteOne,
    getOne,
    getAll,
    getCount,
    postOne,
    updateById,
};