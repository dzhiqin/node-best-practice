'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Book extends Model {
		static associate(models) {
			Book.belongsTo(models.Author,{
				foreignKey: {
					name: "authorId",
				}
			}),
			Book.belongsTo(models.Category,{
				foreignKey: {
					name: "categoryId",
				}
			})
		}
	}
	Book.init({
		name: DataTypes.STRING,
		author: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Book'
	});
	return Book;
};