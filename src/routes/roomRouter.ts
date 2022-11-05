// TODO: organize json payload in CRUD

import { Router } from "express";

import ControllerFactory from "../generators/Factories/ControllerFactory";
import RoomModel from "../data/models/RoomModel";
import RouteType from "../generators/CommonTypes/RouteType";
import FactoryAPI from "../generators/FactoryAPI";

const config: RouteType[] = [
    {
        type:       "GET",
        uri:        "/getOneById/:id",
        middleware: ControllerFactory.create("GET_BY_ID", RoomModel),
    },
    {
        type:       "GET",
        uri:        "/getAll",
        middleware: ControllerFactory.create("GET_ALL", RoomModel),
    },
    {
        type:       "GET",
        uri:        "/getCount",
        middleware: ControllerFactory.create("GET_COUNT", RoomModel),
    },
    {
        type:       "POST",
        uri:        "/postOne",
        middleware: ControllerFactory.create("POST_ONE", RoomModel),
    },
    {
        type:       "PATCH",
        uri:        "/updateOneById/:id",
        middleware: ControllerFactory.create("UPDATE_BY_ID", RoomModel),
    },
    {
        type:       "DELETE",
        uri:        "/deleteOneById/:id",
        middleware: ControllerFactory.create("DELETE_BY_ID", RoomModel),
    },
];

const RoomRoutes = FactoryAPI.createRoute(config);

export default RoomRoutes;