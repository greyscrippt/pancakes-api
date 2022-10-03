import { assert } from "chai";
import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/api/";

describe("RoomController.postOne()", async() => {
    let data: AxiosResponse<any, any>;

    beforeEach(async() => {
        data = await axios.post( API_URL+"rooms/postOne", { name: "My Very Own Test" } );
    });

    
    it("data shouldn't be of type 'undefined'", donne => {
        assert.notEqual( data, undefined );
        donne();
    });
    
    it("should return a 200 code", donne => {
        assert.equal( data.status, 200 );
        donne();
    });

    it("the result data should be of type 'object'", donne => {
        assert.equal( typeof data.data, "object" );
        donne();
    });

    it("the result data.id should be of type 'string'", donne => {
        assert.equal( typeof data.data.id, "string" );
        donne();
    });
});