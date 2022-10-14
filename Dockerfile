FROM node:16-alpine

RUN mkdir -p /usr/staff-app/
WORKDIR /staff-app

COPY package.json yarn.lock ./
RUN yarn install

# Copy from to
COPY ./ ./
# COPY next.config.js ./next.config.js

# COPY src ./src
# COPY public ./public

RUN yarn install
RUN yarn run build

EXPOSE 3000
CMD ["yarn", "start"]