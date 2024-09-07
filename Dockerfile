# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:alpine AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
WORKDIR /temp/dev
RUN bun install --frozen-lockfile &&\
	# install with --production (exclude devDependencies)
	mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
WORKDIR /temp/prod
RUN bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_SENTRY_DSN=${SENTRY_DSN}
ENV NEXT_PUBLIC_URL=${URL}
RUN bun test &&\
	bun run build

# copy production dependencies and source code into final image
FROM base AS release

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing

COPY --from=prerelease /usr/src/app/public ./public
COPY --from=prerelease /usr/src/app/.next/standalone ./
COPY --from=prerelease /usr/src/app/.next/static ./.next/static

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "server.js" ]
