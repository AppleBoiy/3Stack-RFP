#!/bin/sh


docker run -d \
    --name docker-react \
    -v ${PWD}:/usr/src/app \
    -v /usr/src/app/node_modules \
    -p 3000:3000 \
    --rm \
    docker-react