
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const sequelize = require('../config/db');
const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middleware/errorHandler');


const requiredEnvVars = ['DB_USERNAME', 'DB_PASSWORD', 'DB_DATABASE', 'DB_HOST'];
requiredEnvVars.forEach(envVar => {
    if (!process.env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`);
    }
});


const checkDbConnection = async () => {
    try {
        await sequelize.authenticate();
        return true;
    } catch (error) {
        return false;
    }
};


const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());


app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});


app.use('/api/authors', authorRoutes);
app.use('/api/posts', postRoutes);


app.get('/api', (req, res) => {
    res.json({
        version: '1.0.0',
        endpoints: {
            authors: '/api/authors',
            posts: '/api/posts',
            health: '/health'
        }
    });
});


app.get('/health', async (req, res) => {
    const dbStatus = await checkDbConnection();

    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        database: dbStatus ? 'connected' : 'disconnected',
        service: {
            name: process.env.npm_package_name || 'blog-api',
            version: process.env.npm_package_version || '1.0.0'
        }
    });
});


app.use(errorHandler);

module.exports = app;