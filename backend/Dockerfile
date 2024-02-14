FROM node:lts-alpine3.19
ENV NODE_ENV production
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . .
CMD ["npm", "run", "start"]