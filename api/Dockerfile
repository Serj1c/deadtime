FROM node:12.16.2

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["ts-node", "index.ts"]