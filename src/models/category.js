'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Category extends Model {
		static associate(models) {
			Category.hasMany(models.Book,{
				foreignKey: {
					name: "categoryId"
				}
			})
			Category.belongsToMany(models.Author,{through: 'Book',foreignKey: 'categoryId'})
		}
	}
	Category.init({
		name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Category',
	});
	return Category;
};