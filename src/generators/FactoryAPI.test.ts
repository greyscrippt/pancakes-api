import { assert } from "chai";
import { Pipe, Pipeline } from "./FactoryAPI";

describe("Testing the Pipeline class", () => {

    it("should allow addition of pipes", () => {
        let pipe: Pipe = { callback: () => "Hello" };
        let pipeline: Pipeline = new Pipeline();

        pipeline.add( pipe );

        assert.equal(pipeline.get()[0], pipe);
    });

    it("should allow execution of the pipeline", () => {
        let pipeline: Pipeline = new Pipeline();

        let pipe1: Pipe = { callback: (a: number[]) => {
            var result: number = a[0];
            a.map((val, index) => {
                if( index>0 )
                    result = result + val;
            });

            return result;
        }};

        pipeline.add( pipe1 );

        let pipelineRun = pipeline.run( [4,4] );

        assert.equal(pipelineRun, 8);
    });
});