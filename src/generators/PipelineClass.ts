interface Pipe {
    callback: any,
}

class Pipeline {
    private pipeline = new Array<Pipe>();

    add(pipe: Pipe) {
        this.pipeline.push( pipe );
    }

    get() {
        return this.pipeline;
    }

    run(input: any) {
        let result: any = input;

        this.pipeline.map(( pipe: Pipe ) => {
            result = pipe.callback( result );
        });

        return( result );
    }
}

export {
    Pipeline,
    Pipe,
};