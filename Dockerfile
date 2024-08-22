# FROM node:22.3.0 as base
# WORKDIR /usr/src/app
# COPY package*.json ./
# ARG NODE_ENV
# RUN if [ "$NODE_ENV" = "development" ]; \
#     then npm install; \
#     else npm install --only=production; \
#     fi
# COPY . .
# EXPOSE 3000
# CMD ["npm", "run","start"]
FROM node:22.3.0 as base

FROM base as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run","start-dev"]

FROM base as production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production;
COPY . .
EXPOSE 3000
CMD ["npm", "run","start"]


