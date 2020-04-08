#!/bin/bash



container=$(sudo docker ps | awk 'NR>1 {print $1}')

# if exists a container stop it
if [[ -n "$container" ]]; then
  echo "Stopping previuos container $container"
  (sudo docker stop $container) > /dev/null
  echo  "ok"
fi

# create container from docker file
echo "Building container"
sudo docker build -t "jso-frontend" ./ > /dev/null
echo "ok"

# run the container created
echo "Starting container"
sudo docker run --detach -p 3000:3000 jso-frontend > /dev/null
echo "ok"
