FROM node:8.10.0

WORKDIR /usr/src/jso-frontend

COPY ./ ./

# VOLUME ./ /usr/src/jso-frontend

RUN npm install

CMD ["npm", "start"]