// Grabbing Sequelize tools
const { Model, DataTypes } = require('sequelize');

// Bringing in our DB setup
const sequelize = require('../config/connection.js');

// Crafting our Category model, inheriting from Sequelize's Model class
class Category extends Model {}

// Setting up the Category model structure
Category.init(
  {
    id: {
      type: DataTypes.INTEGER, // ID, integer, can't be null, auto-increments
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING, // Name of the category, a string, can't be null
      allowNull: false,
    },
  },
  {
    sequelize, // Plugging in the DB connection
    timestamps: false, // No automatic timestamps
    freezeTableName: true, // Keeps table name as is
    underscored: true, // Fields in snake_case
    modelName: 'category', // Name for this model
  }
);

// Shipping out the Category model to be used elsewhere
module.exports = Category;

