// Grabbing Express for our server
const express = require('express');

// Pulling in our routes
const routes = require('./routes');

// Kicking off an Express app
const app = express();

// Port: Grab from environment or use 3001
const PORT = process.env.PORT || 3001;

// Middlewares handles JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hooking up routes
app.use(routes);

// 🏁 Starting the server and logging that it's up and running
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

