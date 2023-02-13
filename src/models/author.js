'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasMany(models.Book,{
        foreignKey: {
          name: "authorId"
        }
      })
      Author.belongsToMany(models.Category,{through: 'Book',foreignKey: 'authorId'})
    }
  }
  Author.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author'
  });
  return Author;
};