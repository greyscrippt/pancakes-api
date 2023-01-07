import RouteType from "../src/generators/CommonTypes/RouteType";

export function testRoute(route: Array<RouteType>) {
    route.map(( endpoint: RouteType ) => {
        testEndpoint(endpoint);
    });
}

export function testEndpoint(endpoint: RouteType) {

}
