import { Request, Response } from "express";
import { Model } from "mongoose";

import ServiceFactory from "../../Factories/ServiceFactory";

const ControllerMiddleware = {    
    getOneById: (model: Model<any>) => {
        const middleware = async(req: Request, res: Response, donne: any) => {
            try {
                const id = req.params.id;
                const data = await ServiceFactory.create({ type: "GET_BY_ID", body: id }, model);
                res.status( 200 ).json( data );
                donne();
            }
            catch( error: any ){
                res.status( 500 ).json({ message: error.message });
            }
        }

        return middleware;
    },
    getCount: (model: Model<any>) => {
        const middleware = async(req: Request, res: Response, donne: any) => {
            try {
                const data = await ServiceFactory.create({ type: "GET_COUNT", body: "" }, model);
                res.status( 200 ).json( data );
                donne();
            }
            catch( error: any ){
                res.status( 500 ).json({ message: error.message });
            }
        }

        return middleware;
    },
    postOne: (model: Model<any>) => {
        const middleware = async(req: Request, res: Response, donne: any) => {
            try {
                const data = await ServiceFactory.create({ type: "POST_ONE", body: req.body }, model);
                res.status( 200 ).json( data );
                donne();
            }
            catch( error: any ){
                res.status( 500 ).json({ message: error.message });
            }
        }

        return middleware;
    },
    getAll: (model: Model<any>) => {
        const middleware = async(req: Request, res: Response, donne: any) => {
            try {
                const data = await ServiceFactory.create({ type: "GET_ALL", body: "" }, model);
                res.status( 200 ).json( data );
                donne();
            }
            catch( error: any ){
                res.status( 500 ).json({ message: error.message });
            }
        }

        return middleware;
    },
    deleteOneById: (model: Model<any>) => {
        const middleware = async(req: Request, res: Response, donne: any) => {
            try {
                const id = req.params.id;
                const data = await ServiceFactory.create({ type: "DELETE_BY_ID", body: id }, model);
                res.status( 200 ).json( data );
                donne();
            }
            catch( error: any ){
                res.status( 500 ).json({ message: error.message });
            }
        }

        return middleware;
    },
    updateOneById: (model: Model<any>) => {
        const middleware = async(req: Request, res: Response) => {
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
        
                const body = { id: id, updatedData: updatedData, options: options};

                const result = await ServiceFactory.create({ type: "UPDATE_BY_ID", body: body }, model);
        
                res.status(200).send(result)
            }
            catch (error: any) {
                res.status(500).json({ message: error.message })
            }
        }

        return middleware;
    },
}

export default ControllerMiddleware;