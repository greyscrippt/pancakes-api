// TODO: organize json payload in CRUD

import express from "express";

import GuestModel from '../models/guest';

const guestRoutes = express.Router();

//Post Method
guestRoutes.post('/post', async(req, res) => {
    const data = new GuestModel({
        name: req.query.name,
    });

    try {
        const dataToSave = data.save();
        res.status(200).json( dataToSave );
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

//Get all Method
guestRoutes.get('/getAll', async (req, res) => {
    try{
        const data = await GuestModel.find();
        res.json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
});

//Get by ID Method
guestRoutes.get('/getOne/:id', async (req, res) => {
    try{
        const data = await GuestModel.findById(req.params.id);
        res.json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
});

//Update by ID Method
guestRoutes.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.query;
        const options = { new: true };

        const result = await GuestModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send( result )
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

//Delete by ID Method
guestRoutes.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await GuestModel.findByIdAndDelete(id)
        res.send(data);
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

export default guestRoutes;