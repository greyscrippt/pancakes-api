import { assert } from "chai";
import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/api/";

describe("Testing '/getOne' endpoint", () => {
    let data: AxiosResponse<any, any>;
    let sample: AxiosResponse<any, any>;

    beforeEach(async() => {
        sample = await axios.get( API_URL+"guests/getAll" );

        if( sample.data.length == 0 ) {
            throw "Guests is an empty array. Please populate the collection before proceding with the test"
        }

        data = await axios
            .get( API_URL+"guests/getOneById/"+sample.data[0]._id);
    });

    it("data shouldn't be of type 'undefined'", donne => {
        assert.notEqual( data, undefined );
        donne();
    });

    it("should return a 200 code", donne => {
        assert.equal( data.status, 200 );
        donne();
    });

    it("should return the same data as in the sample", donne => {
        assert.equal( JSON.stringify( data.data ), JSON.stringify( sample.data[0] ));
        donne();
    });
});
