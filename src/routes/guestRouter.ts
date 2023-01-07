import RouterConfig from "../generators/CommonTypes/RouterConfig";
import ControllerFactory from "../generators/Factories/ControllerFactory";
import GuestModel from "../data/models/GuestModel";
import RouterFactory from "../generators/Factories/RouterFactory";

const config: RouterConfig[] = [
    {
        type:       "GET",
        uri:        "/getOneById/:id",
        middleware: ControllerFactory.create("GET_BY_ID", GuestModel),
    },
    {
        type:       "GET",
        uri:        "/getAll",
        middleware: ControllerFactory.create("GET_ALL", GuestModel),
    },
    {
        type:       "GET",
        uri:        "/getCount",
        middleware: ControllerFactory.create("GET_COUNT", GuestModel),
    },
    {
        type:       "POST",
        uri:        "/postOne",
        middleware: ControllerFactory.create("POST_ONE", GuestModel),
    },
    {
        type:       "PATCH",
        uri:        "/updateOneById/:id",
        middleware: ControllerFactory.create("UPDATE_BY_ID", GuestModel),
    },
    {
        type:       "DELETE",
        uri:        "/deleteOneById/:id",
        middleware: ControllerFactory.create("DELETE_BY_ID", GuestModel),
    },
];

const GuestRoutes = RouterFactory.createRoute(config);

export default GuestRoutes;
