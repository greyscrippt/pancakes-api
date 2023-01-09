// Refactor routes/ to separate Routers from Configs

import { room_config } from "../src/routes/roomRouter";
import { testRouter } from "../test-factory/TestFactory";

testRouter(room_config);
