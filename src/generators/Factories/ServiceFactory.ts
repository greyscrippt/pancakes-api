import { Model } from "mongoose";

 import ActionType from '../CommonTypes/ActionType';
 import Actions from '../Actions/Actions';
 import EndpointType from "../CommonTypes/EndpointType";
import logger from "../../logging/logger";
 

 const ServiceFactory = {
    // TODO: optimize this function
     create(endpoint: EndpointType, model: Model<any>) {
         if( Actions.find((item: ActionType) => item.type == endpoint.type) ) {
             return Actions.find((item: ActionType) => item.type == endpoint.type).action(model, endpoint.body);
         }
        logger.error("Could not find endpoint type in ServiceFactory.create");
        
         return("{'error': 'Error'}");
     }
 }
 
 export default ServiceFactory;
