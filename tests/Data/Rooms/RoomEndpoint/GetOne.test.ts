import { assert } from "chai";
import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/api/";

describe("Testing '/getOne' endpoint", () => {
    let data: AxiosResponse<any, any>;

    beforeEach(async() => {
        const sample = await axios.get( API_URL+"rooms/getAll" );

        if( sample.data.length == 0 ) {
            throw "Rooms is an empty array. Please populate the collection before proceding with the test"
        }

        data = await axios
            .get( API_URL+"rooms/getOneById/"+sample.data[0]._id);
    });

    it("data shouldn't be of type 'undefined'", donne => {
        assert.notEqual( data, undefined );
        donne();
    });

    it("should return a 200 code", donne => {
        assert.equal( data.status, 200 );
        donne();
    });
});