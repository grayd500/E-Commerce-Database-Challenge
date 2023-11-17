// Scooping up Sequelize tools
const { Model, DataTypes } = require('sequelize');

// Bringing in our database setup
const sequelize = require('../config/connection.js');

// Crafting our Tag model, just like we do with Sequelize's Model
class Tag extends Model {}

// Laying out how Tag is structured
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER, // ID: integer, primary key, auto-increments, not null
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING, // Tag name: a string, null allowed
    },
  },
  {
    sequelize, // Plugging in the DB
    timestamps: false, // Skipping auto timestamps
    freezeTableName: true, // No plural for table name
    underscored: true, // Snake_case 🐍
    modelName: 'tag', // Naming our model 'tag'
  }
);

// Exporting Tag for use in other places
module.exports = Tag;

