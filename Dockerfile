# base image
FROM node:20 AS build

# set backend url
ARG VITE_BACKEND_URL=https://musical-memory-gww76v77q2wq75-3001.app.github.dev/api/v1

# set working dir
WORKDIR /build

# copy package.json
COPY package.json .
COPY package-lock.json . 

# install deps
RUN npm install

# copya ll files
COPY . . 

# run build
RUN npm run build

# nginx
FROM nginx AS final

# nginx workdir
WORKDIR /usr/share/nginx/html

# copy built vite 
COPY --from=build /build/dist . 