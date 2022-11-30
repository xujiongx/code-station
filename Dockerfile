FROM node:latest as build

COPY . .

RUN yarn && yarn build

FROM nginx:latest

RUN mkdir -p /var/log/service/access && mkdir -p /var/log/service/err

WORKDIR /app

COPY --from=build ./config/nginx.conf  /etc/nginx/conf.d/default.conf

COPY --from=build ./dist/ /webser/www/
