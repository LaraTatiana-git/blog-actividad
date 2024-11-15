// src/app.js
const express = require('express');
const { sequelize } = require('./models');
const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());
app.use(authorRoutes);
app.use(postRoutes);

// Export app before starting server
module.exports = app;

// Only start server if file is run directly
if (require.main === module) {
    sequelize.sync().then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    }).catch(error => {
        console.error('Unable to connect to the database:', error);
    });
}