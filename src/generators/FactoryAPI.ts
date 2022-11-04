/**
 * 
 * API factory class
 * 
 */

import { Request, Response } from "express";
import { Model } from "mongoose";

interface Endpoint {
    body: string,
    type: string,
}

class ServiceFactory {
    async create(endpoint: Endpoint, model: Model<any>) {
        if(endpoint.type == "GET_ONE") {
            return await model.findById( endpoint.body );
        } 
    }
}