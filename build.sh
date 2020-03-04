#!/bin/bash

sudo docker build -t "jso-frontend" ./

sudo docker run -it -p 3000:3000 jso-frontend
