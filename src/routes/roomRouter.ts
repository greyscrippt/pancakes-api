// TODO: organize json payload in CRUD

import express, { Request, Response } from "express";
import RoomController from "../domain/controllers/RoomController";

const RoomRoutes = express.Router();

// Post Method
RoomRoutes.post('/postOne', async(req, res) => {
    console.log("[ ROOM ][ postOne ]: ");
    try {
        RoomController.postOne(req, res);
    } catch (error) {
        res.send( error );
    }
});

// Get all Method
RoomRoutes.get('/getAll', async (req, res) => {
    console.log("[ ROOM ][ getAll ]: ");
    try {
        RoomController.getAll(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

// Get count of document in Room collection in the database.
RoomRoutes.get('/getCount', async (req, res) => {
    console.log("[ ROOM ][ getCount ]");
    try {
        RoomController.getCount(req, res);
    } catch (error) {
        res.send( error );
    }
});

// Get by ID Method
RoomRoutes.get('/getOneById/:id', async (req, res) => {
    console.log("[ ROOM ][ getOneById ]: "+req.params.id);
    try {
        RoomController.getOne(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

// Update by ID Method
RoomRoutes.patch('/update/:id', async (req, res, next) => {
    console.log("[ ROOM ][ updateOneById ]: "+req.params.id);
    try {
        RoomController.updateOneById(req, res, next);
    } catch ( error ) {
        res.send( error );
    }
});

// Delete one by ID Method
RoomRoutes.delete('/deleteOneById/:id', async (req: Request, res: Response) => {
    console.log("[ ROOM ][ deleteOneById ]: "+req.params.id);
    try {
        RoomController.deleteOneById(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

export default RoomRoutes;