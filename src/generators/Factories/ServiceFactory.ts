import { Model } from "mongoose";

 import ActionType from '../CommonTypes/ActionType';
 import Actions from '../Actions/Actions';
 import EndpointType from "../CommonTypes/EndpointType";
 
 const ServiceFactory = {
     create(endpoint: EndpointType, model: Model<any>) {
         if( Actions.find((item: ActionType) => item.type == endpoint.type) ) {
             return Actions.find((item: ActionType) => item.type == endpoint.type).action(model, endpoint.body);
         }
         return("{'error': 'Error'}");
     }
 }
 
 export default ServiceFactory;