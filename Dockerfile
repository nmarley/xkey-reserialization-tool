FROM node:9-alpine

# update package index and install git
RUN apk add --update --no-cache git

WORKDIR /app

# copy package manifest separately first
COPY package.json package-lock.json /app/
RUN npm install --quiet

COPY . /app/

RUN npm run linebreak-check
RUN npm run build

CMD /bin/ash
