# Development image: run Vite dev server for local editing
FROM node:20-alpine

WORKDIR /app

# Install dependencies (copied first for better layer caching)
COPY package.json ./
RUN npm install

# App source (mounted at runtime via docker-compose for live edits)
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
