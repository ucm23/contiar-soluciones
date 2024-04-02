FROM node:14.18.0-alpine

RUN mkdir /contiar-soluciones
 
WORKDIR /contiar-soluciones

COPY ./package.json /contiar-soluciones

RUN npm install

COPY . /contiar-soluciones

RUN npm run build

CMD ["npm", "start"] 