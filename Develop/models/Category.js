// Import the Model class and DataTypes object from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the configured Sequelize instance
const sequelize = require('../config/connection.js');

// Create a new model (Category) by extending from the Sequelize Model class
class Category extends Model {}

// Initialize the Category model
Category.init(
  {
    // Define the properties of the Category model
    id: {
      type: DataTypes.INTEGER, // Integer type
      allowNull: false,        // This column cannot be NULL
      primaryKey: true,        // This is a Primary Key
      autoIncrement: true,     // Auto-increment the value
    },
    category_name: {
      type: DataTypes.STRING,  // String type
      allowNull: false,        // This column cannot be NULL
    },
  },
  {
    // Model configuration options
    sequelize,                // Attach the sequelize instance
    timestamps: false,        // Don't create "createdAt" and "updatedAt" fields
    freezeTableName: true,    // Disable pluralization of table name
    underscored: true,        // Use underscores instead of camelCase for field names
    modelName: 'category',    // Set the name of the model
  }
);

// Export the Category model so it can be used in other parts of the app
module.exports = Category;
