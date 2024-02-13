FROM node:lts-alpine3.19
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . .
ENV JWT_SECRET=bLR66DXsRMW+rVCv7sBC48V18do2XsIp1d+l/cLyaro=
CMD ["npm", "run", "start"]