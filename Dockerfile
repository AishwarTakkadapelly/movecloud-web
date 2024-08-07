# Stage 1: Build the React app
FROM node:14 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies and log the output
RUN npm install > /app/npm-install.log 2>&1

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app and log the output
RUN npm run build > /app/npm-build.log 2>&1

# Stage 2: Serve the React app with nginx
FROM nginx:alpine

# Copy the built React app from the build stage to the nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy the logs from the build stage to the nginx html folder (optional, for access)
COPY --from=build /app/npm-install.log /usr/share/nginx/html/npm-install.log
COPY --from=build /app/npm-build.log /usr/share/nginx/html/npm-build.log

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
