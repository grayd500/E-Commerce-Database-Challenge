// Pulling in Sequelize essentials
const { Model, DataTypes } = require('sequelize');

// Getting our DB connection ready
const sequelize = require('../config/connection');

// Making our ProductTag model, a kid of Sequelize's Model
class ProductTag extends Model {}

// Setting up the structure for ProductTag
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER, // ID: integer, primary, auto-increments, can't be null
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER, // Links to product, integer
      references: {
        model: 'product', // Refers to 'product' table
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER, // Links to tag, integer
      references: {
        model: 'tag', // Refers to 'tag' table
        key: 'id',
      },
    },
  },
  {
    sequelize, // DB connection is in
    timestamps: false, // No automatic time stamps
    freezeTableName: true, // Keeps table name singular
    underscored: true, // Snake_case for the win
    modelName: 'product_tag', // Model's name set
  }
);

// Exporting ProductTag for use in other parts of the app
module.exports = ProductTag;
