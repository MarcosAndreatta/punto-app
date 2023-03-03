FROM node:18 as dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM node:18 as builder
WORKDIR /app
COPY . . 
COPY --from=dependencies /app/node_modules ./node_modules
CMD npm run start

