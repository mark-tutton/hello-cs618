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

# copy all files
COPY . . 

# run build
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start
CMD ["npm", "start"]