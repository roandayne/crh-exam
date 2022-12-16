FROM node:16

ADD . /web
WORKDIR /web

RUN npm install --force
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

CMD npm start
