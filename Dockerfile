FROM node:20-alpine3.21 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

FROM node:20-alpine3.21 AS runner

WORKDIR /app

RUN apk upgrade --no-cache && \
    rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node . .

USER node

EXPOSE 8080

CMD ["node", "index.js"]