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
    }
}

export default ControllerMiddleware;