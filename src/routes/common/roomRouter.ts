// TODO: organize json payload in CRUD

import express from "express";

import RoomModel from '../../models/common/room';
import * as roomController from '../../controllers/common/RoomController';

const roomRoutes = express.Router();

// Post Method
roomRoutes.post('/post', async(req, res) => {
    try {
        roomController.postOne(req, res);
    } catch (error) {
        res.send(error);
    }
});

// Get all Method
roomRoutes.get('/getAll', async (req, res) => {
    try {
        roomController.getAll(req, res);
    } catch (error) {
        res.send(error);
    }
});

// Get count Method
roomRoutes.get('/getCount', async (req, res) => {
    try {
        roomController.getCount(req, res);
    } catch (error) {
        res.send(error);
    }
});

// Get by ID Method
roomRoutes.get('/getOne/:id', async (req, res) => {
    try {
        roomController.getOne(req, res);
    } catch (error) {
        res.send(error);
    }
});

// Update by ID Method
roomRoutes.patch('/update/:id', async (req, res, next) => {
    try {
        roomController.updateById(req, res, next);
    } catch (error) {
        res.send(error);
    }
});

// Delete by ID Method
roomRoutes.delete('/delete/', async (req, res) => {
    try {
        roomController.deleteOne(req, res);
    } catch (error) {
        res.send(error);
    }
});

export default roomRoutes;