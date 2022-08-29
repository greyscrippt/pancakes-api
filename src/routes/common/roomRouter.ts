// TODO: organize json payload in CRUD

import express from "express";

import RoomModel from '../../models/common/room';
import * as roomController from '../../controllers/common/RoomController';

const roomRoutes = express.Router();

// Post Method
roomRoutes.post('/post', async(req, res) => {
    roomController.postOne(req, res);
});

// Get all Method
roomRoutes.get('/getAll', async (req, res) => {
    roomController.getAll(req, res);
});

// Get count Method
roomRoutes.get('/getCount', async (req, res) => {
    roomController.getCount(req, res);
});

// Get by ID Method
roomRoutes.get('/getOne/:id', async (req, res) => {
    roomController.getOne(req, res);
});

// Update by ID Method
roomRoutes.patch('/update/:id', async (req, res, next) => {
    roomController.updateById(req, res, next);
});

// Delete by ID Method
roomRoutes.delete('/delete/', async (req, res) => {
    try {
        const data = await RoomModel.findByIdAndDelete(req.body.id)
        res.send(data)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

export default roomRoutes;