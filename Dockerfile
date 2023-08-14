FROM node:18-alpine AS base
RUN apk add jq git

WORKDIR "/app"

COPY .git .git
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY tsconfig.build.json tsconfig.build.json
COPY tsconfig.json tsconfig.json
COPY src src

RUN yarn --immutable --immutable-cache
RUN yarn build

FROM node:16-alpine AS final

WORKDIR "/app"

COPY --from=base /app/dist ./dist
COPY --from=base /app/node_modules ./node_modules

EXPOSE 3000

CMD [ "node", "./dist/main" ]
