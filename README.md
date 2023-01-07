# NanoERP API

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

![GitHub repo size](https://img.shields.io/github/repo-size/Mongark/nanoerp-api)

Small API that communicates with a MongoDB database. Used in the NanoERP project.

## Todo

- [ ] TestFactory to auto-generate tests.

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
