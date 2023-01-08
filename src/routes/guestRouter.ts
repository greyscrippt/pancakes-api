import RouterConfig from "../generators/CommonTypes/RouterConfig";
import GuestModel from "../data/models/GuestModel";
import RouterFactory from "../generators/Factories/RouterFactory";

const config: RouterConfig[] = [
    {
        type:       "GET",
        uri:        "/getOneById/:id",
        middleware: {
            type: "GET_BY_ID",
            model: GuestModel,
        },
    },
    {
        type:       "GET",
        uri:        "/getAll",
        middleware: {
            type: "GET_ALL",
            model: GuestModel
        },
    },
    {
        type:       "GET",
        uri:        "/getCount",
        middleware: {
            type: "GET_COUNT",
            model: GuestModel,
        },
    },
    {
        type:       "POST",
        uri:        "/postOne",
        middleware: {
            type: "POST_ONE",
            model: GuestModel,
        },
    },
    {
        type:       "PATCH",
        uri:        "/updateOneById/:id",
        middleware: {
            type: "UPDATE_BY_ID",
            model: GuestModel,
        },
    },
    {
        type:       "DELETE",
        uri:        "/deleteOneById/:id",
        middleware: {
            type: "DELETE_BY_ID",
            model: GuestModel,
        },
    },
];

const GuestRoutes = RouterFactory.createRoute(config);

export default GuestRoutes;
