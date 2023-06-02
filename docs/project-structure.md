# Project Structure

## Files

### app.ts

Where the `app` server object is generated. It is used by `supertest` to generate test, and by `server.ts` to run the API.

### server.ts

Executes the `app` object.

## Folders

### `src/data/`

Where the data manipulation objects are stored, such as `models` and `schema`.

### `src/generators`

Where the API function and object generator code is stored.

### `src/middleware`

Where middleware is stored, such as authentication.
