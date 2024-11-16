const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Author = require('./author');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    categoria: {
        type: DataTypes.STRING
    },
    autor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'authors',
            key: 'id'
        }
    }
}, {
    tableName: 'posts',
    timestamps: true
});


Author.hasMany(Post, { foreignKey: 'autor_id' });
Post.belongsTo(Author, { foreignKey: 'autor_id' });

module.exports = Post;