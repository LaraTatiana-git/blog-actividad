const { Sequelize } = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('blog_db', 'root', 'your_password', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

// Verifica la conexión
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })
    .finally(() => {
        sequelize.close();
    });