// Grabbing environment variables (like DB details)
require('dotenv').config();

// Getting Sequelize ready for database action
const Sequelize = require('sequelize');

// Setting up the database connection
// If JAWSDB_URL exists (like when deployed online), use that
// Otherwise, stick to local database settings (your own setup)
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Online DB setup
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, { // Local DB setup
      host: 'localhost',
      dialect: 'mysql', // We're talking MySQL here
      dialectOptions: {
        decimalNumbers: true, // Handles decimals in numbers
      },
    });

// Sending out the Sequelize setup to be used elsewhere in the app
module.exports = sequelize;