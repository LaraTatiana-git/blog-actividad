'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Author extends Model {
        static associate(models) {
            // define association here
        }
    }
    Author.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Author',
    });
    return Author;
};