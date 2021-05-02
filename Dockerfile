FROM node:16-alpine
WORKDIR /workdir
COPY package*.json /workdir
RUN npm install

COPY . /workdir
# RUN npm run build

EXPOSE 3000
USER node
CMD ["node", "app/index.js"]