# 1. Base image
FROM node:18-alpine

# 2. Working directory
WORKDIR /app

# 3. Copy files and install dependencies
COPY . .

RUN npm install

# 4. Build the Nuxt app
RUN npm run build

# 5. Expose port and start app
EXPOSE 3000

# Nuxt 3 uses .output/server/index.mjs for SSR
CMD ["node", ".output/server/index.mjs"]
