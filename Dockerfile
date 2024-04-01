FROM node:14.18.0-alpine

RUN mkdir /cti
 
WORKDIR /cti

COPY ./package.json /cti

RUN npm install

COPY . /cti

RUN npm run build

CMD ["npm", "start"] 