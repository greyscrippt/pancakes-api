# Pancakes Data Pipeline

In this API, data flows from a pre-defined schema into the Express backend through a number of processes. Below there's an outline:

`express api -> routes -> controller -> service -> model -> schema`

## Function of each step

### Schema

A Mongoose schema is used to define the data structure for communicating with the database.

### Model

A Model posseses the callbacks for communicating with the database.

### Service

The service layer is going to abstract away from the model layer, decoupling it from the rest of the application.

### Controller

The controller layer creates the callbacks for the Express routes

### Routes

Routes will hold onto the callbacks from the controller layers into a specific uri.

### Express API

The last layer is the Express API, where al routers come together under a singe url.

