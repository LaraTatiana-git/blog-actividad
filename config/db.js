// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        charset: 'utf8mb4',
        multipleStatements: true
    },
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci'
    }
});

module.exports = sequelize;