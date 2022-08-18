import express from "express"

const router = express.Router()

import RoomModel from '../models/room.js';

//Post Method
//Post Method
router.post('/post', async(req, res) => {
    const data = new RoomModel({
        name: req.query.name,
    });

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await RoomModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await RoomModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

export default router;