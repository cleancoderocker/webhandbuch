# Define the base Docker image
FROM node:14
# Create the application directory
WORKDIR /usr/src/app
# Copy the configuration files
# package.json and package-lock.json
COPY package*.json ./
# Install the dependencies
RUN npm install
# Alternatively in the production system:
# RUN npm install --production
# Copy the source code files
COPY . .
# Release the port at which the
# Express server is running
EXPOSE 8001
# Start the defined npm script
CMD [ “npm”, “start” ]
# Alternatively start in debug mode
# CMD [ “npm”, “start:debug” ]