// Import the Express package
const express = require('express');
// Import the routes from the 'routes' folder
const routes = require('./routes');

// Initialize an instance of Express
const app = express();

// Set the port number, either from an environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON objects
app.use(express.json());

// Middleware for parsing URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Middleware to use the imported routes
app.use(routes);

// Listen to the server on the set port number
app.listen(PORT, () => {
  // Log a message indicating that the server is running
  console.log(`App listening on port ${PORT}!`);
});
