import { expect } from "chai";
import axios, { AxiosResponse } from "axios";
import "mocha";

const API_URL = "http://localhost:3000/api/";

describe("Testing endpoint /rooms/getCount", () => {
  it("should return number of rooms", async () => {
    const get = async() => {
        const c1 = axios.get(API_URL+'rooms/getCount')
            .then(function (response: AxiosResponse) {
                // handle success
                return response.data;
            })
            .catch(function (error) {
                expect(true).to.equal(false);
            });
        
        const c2 = axios.get(API_URL+'rooms/getAll')
            .then(function (response: AxiosResponse) {
                // handle success
                return response.data.length;
            })
            .catch(function (error) {
                expect(true).to.equal(false);
            });
        
        return (c1==c2) ? true : false;
    }

    get().then((res) => {
        expect( res ).to.equal( true );
    });
  });
});
