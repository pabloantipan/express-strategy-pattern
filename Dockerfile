FROM node:14.20-slim


ENV APP_HOME /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 3000

# CMD [ "node", "server.js" ]
CMD [ "npm", "start" ]