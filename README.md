# NanoERP API

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

![GitHub repo size](https://img.shields.io/github/repo-size/Mongark/nanoerp-api)

Small API that communicates with a MongoDB database. Used in the NanoERP project.

## How to Use the Router Generator

### Schema and Model

First, you must create a Mongoose Model from a Schema that an endpoint can use. Example:

```typescript
const SampleSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
});

const SampleModel = model('Sample', SampleSchema);
```

You can find more information about it [here](https://mongoosejs.com/docs/models.html).

### Router Generation

With a Model, you can generate an Express router based on an array of endpoints. Each endpoint must be defined according to the EndpointType interface, and endpoint queries can ben passed through the `uri` string.

```typescript
const router_config: Array<RouterConfig> = [
    {
        type:       "GET",
        uri:        "/:id",
        middleware: ControllerFactory.create("GET_BY_ID", SampleModel),
    },
    {
        type:       "POST",
        uri:        "/",
        middleware: ControllerFactory.create("POST_ONE", SampleModel),
    },
]

const sample_router = RouterFactory.createRoute(config);
```

### Adding to the API

Lastly, youd just have to use the created route in your Express API.

```typescript
const app = express();

app.use(sample_router);
```

## Todo

- [ ] TestFactory to auto-generate tests.

- [ ] Rename RouteType folder to EndpointType

## Project Structure
```
src
├── data
│   ├── models
│   └── schema
├── generators
│   ├── Actions
│   ├── CommonTypes
│   ├── Controllers
│   │   ├── ControllerMiddleware
│   ├── Factories
├── middleware
│   └── auth
└── routes
```

### Data
For Models and Schema.

### Generators
For API route generation.

### Middleware
For non-generator middleware, such as Auth.

### Routes
For defining and loading generated routes.

## Bussiness Rules

### Database

Accommodation

- [ ] Each `Accommodation` must have a unique name.
- [ ] Each `Accommodation` must have a `Location`.

Location

- [ ] Each `Location` can have `Accommodations`.

Room

- [ ] Each `Room` must have a unique name.
- [ ] Each `Room` must belong to an `Accommodation`.
