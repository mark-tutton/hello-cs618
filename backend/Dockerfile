# get image
FROM node:20 

# set working dir
WORKDIR /app

# copy package.json and package-lock.json into app
COPY package.json package-lock.json ./

# install deps
RUN npm install

# copy backend into app
COPY . .

# start the server
CMD ["npm", "start"]