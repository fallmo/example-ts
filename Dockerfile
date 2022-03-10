FROM quay.io/mohamedf0/node:14 as build-stage

WORKDIR /app

COPY package*.json tsconfig.json .eslint* ./

RUN npm install

COPY ./src ./src

RUN npm run build


FROM quay.io/mohamedf0/node:14 as serve-stage

WORKDIR /app

ENV NODE_ENV production

COPY --from=build-stage /app/dist ./

COPY package*.json .

RUN npm install --only=production

CMD ["node", "."]

EXPOSE 8080



