# Use the official Node.js image as base
FROM node

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your Express app will run
EXPOSE 3000
ENV mongoURL="mongodb+srv://sheth-saniya:sheth9970@cluster0.lnp7zp3.mongodb.net/inhouse-project-db"
# Command to run the Express server
CMD ["node", "app.js"]
