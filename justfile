# build files into dist
build:
    yarn run build

# prepares docker image.
build-docker:
    yarn run build
    sudo docker build -t minierp-api:0.1 .

# run in development mode with hot-reload.
run-dev:
    yarn run start:dev

# start MongoDB docker container
start-mongodb-container:
    sudo docker run -d -p 27017:27017 mongo