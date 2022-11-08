// TODO: organize json payload in CRUD

import express, { Request, Response } from "express";
import GuestController from "../domain/controllers/GuestController";

const GuestRoutes = express.Router();

// Post Method
GuestRoutes.post('/postOne', async(req, res) => {
    try {
        GuestController.postOne(req, res);
    } catch (error) {
        res.send( error );
    }
});

// Get all Method
GuestRoutes.get('/getAll', async (req, res) => {
    try {
        GuestController.getAll(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

// Get count of document in Room collection in the database.
GuestRoutes.get('/getCount', async (req, res) => {
    try {
        GuestController.getCount(req, res);
    } catch (error) {
        res.send( error );
    }
});

// Get by ID Method
GuestRoutes.get('/getOneById/:id', async (req, res) => {
    try {
        GuestController.getOne(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

// Update by ID Method
GuestRoutes.patch('/updateOneById/:id', async (req, res, next) => {
    try {
        GuestController.updateOneById(req, res, next);
    } catch ( error ) {
        res.send( error );
    }
});

// Delete one by ID Method
GuestRoutes.delete('/deleteOneById/:id', async (req: Request, res: Response) => {
    try {
        GuestController.deleteOneById(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

export default GuestRoutes;