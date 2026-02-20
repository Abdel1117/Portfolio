# ---- deps ----
FROM node:20-bookworm-slim AS deps

WORKDIR /app

COPY package.json ./
RUN npm install --legacy-peer-deps

# ---- builder ----
FROM node:20-bookworm-slim AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- runner ----
FROM node:20-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Next "standalone" server
COPY --from=builder /app/.next/standalone ./
# Static assets + public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]