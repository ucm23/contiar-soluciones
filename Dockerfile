FROM node:latest

# RUN mkdir /contiar-soluciones
 
WORKDIR /contiar-soluciones

COPY package.json package-lock.json /contiar-soluciones/

RUN npm install

COPY . /contiar-soluciones

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

