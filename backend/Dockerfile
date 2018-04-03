FROM node:8.6.0
WORKDIR /ttt-backend
COPY package.json ./
RUN npm install
COPY yarn.lock ./
RUN yarn
COPY . .