// server.js
const express = require('express');
const sequelize = require('./config/db');
const authorRoutes = require('./src/routes/authorRoutes');
const postRoutes = require('./src/routes/postRoutes');

const app = express();

app.use(express.json());
app.use('/api/authors', authorRoutes);
app.use('/api/posts', postRoutes);

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
    const startServer = async () => {
        try {
            await sequelize.authenticate();
            await sequelize.sync();
            app.listen(3000, () => {
                console.log('Server running on port 3000');
            });
        } catch (error) {
            console.error('Failed to start server:', error);
            process.exit(1);
        }
    };
    startServer();
}

module.exports = app;