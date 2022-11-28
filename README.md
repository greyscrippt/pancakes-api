# NanoERP API

Small API that communicates with a MongoDB database. Used in the NanoERP project.

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
