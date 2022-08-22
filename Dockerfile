FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

# copy the backend
COPY src ./src

# install backend dependencies  
RUN npm install

EXPOSE 3000

# RUN npm run build:back

# copy the frontend

COPY client ./client

# install frontend dependencies
RUN npm install --prefix client

# RUN npm run build:front

RUN npm run build:all

CMD ["npm", "start"]