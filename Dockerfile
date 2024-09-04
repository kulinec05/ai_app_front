FROM node:18.14.2 as build
FROM nginx:1.16.0-alpine
COPY build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
