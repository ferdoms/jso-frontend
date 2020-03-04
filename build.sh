#!/bin/bash

git pull

docker build -t "jso-frontend" ./

docker run -it -p 3000:3000 jso-frontend
