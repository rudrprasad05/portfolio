# Stage 1: Build Stage
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the production application
RUN npm run build

# Stage 2: Production Stage
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json /app/.next /app/public ./

# Install only production dependencies
RUN npm ci --production

# Set the environment to production
ENV NODE_ENV=production

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
