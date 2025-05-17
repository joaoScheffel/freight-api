# Etapa 1: Build (compila o TS)
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Run (só roda o JS compilado, mais leve)
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --production

COPY --from=builder /app/dist ./dist

# Copie outros arquivos necessários (ex: .env, etc) se precisar

ENV PORT=8080
EXPOSE 8080

CMD ["node", "dist/main.js"]