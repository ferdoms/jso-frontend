#!/bin/bash

sudo docker build -t "jso-frontend" ./

sudo docker run --detach -p 3000:3000 jso-frontend
