#!/bin/bash

sudo docker build -t "jso-frontend" ./

container=$(sudo docker ps | awk 'NR>1 {print $1}')

if [[ -n "$container" ]]; then
  echo "Stopping container"
  (sudo docker stop $container)
fi

sudo docker run --detach -p 3000:3000 jso-frontend
