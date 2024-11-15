// src/models/author.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Author = sequelize.define('Author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'authors',
    timestamps: true
});

module.exports = Author;