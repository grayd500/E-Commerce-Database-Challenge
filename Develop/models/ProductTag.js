// Import the Model class and DataTypes object from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the configured Sequelize instance
const sequelize = require('../config/connection');

// Create a new model (ProductTag) by extending from the Sequelize Model class
class ProductTag extends Model {}

// Initialize the ProductTag model
ProductTag.init(
  {
    // Define the properties of the ProductTag model
    id: {
      type: DataTypes.INTEGER,  // Integer type
      allowNull: false,         // This column cannot be NULL
      primaryKey: true,         // This is a Primary Key
      autoIncrement: true,      // Auto-increment the value
    },
    product_id: {
      type: DataTypes.INTEGER,  // Integer type
      // Foreign key referencing 'product' table
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,  // Integer type
      // Foreign key referencing 'tag' table
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    // Model configuration options
    sequelize,                 // Attach the sequelize instance
    timestamps: false,         // Don't create "createdAt" and "updatedAt" fields
    freezeTableName: true,     // Disable pluralization of table name
    underscored: true,         // Use underscores instead of camelCase for field names
    modelName: 'product_tag',  // Set the name of the model
  }
);

// Export the ProductTag model so it can be used in other parts of the app
module.exports = ProductTag;