'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.Author, { foreignKey: 'author_id' });
        }
    }
    Post.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        category: {
            type: DataTypes.STRING
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'authors',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};