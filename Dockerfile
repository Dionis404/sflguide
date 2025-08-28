FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4321
CMD ["sh", "-c", "npm run astro preview --host 0.0.0.0 --port 4321"]

