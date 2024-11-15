require('dotenv').config();

const express = require('express');
import cors from 'cors';
import authorRoutes from './routes/authorRoutes';
import postRoutes from './routes/postRoutes';
const errorHandler = require('./middleware/errorHandler');

const requiredEnvVars = ['DB_USERNAME', 'DB_PASSWORD', 'DB_DATABASE', 'DB_HOST'];
requiredEnvVars.forEach(envVar => {
    if (!process.env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`);
    }
});

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authorRoutes);
app.use('/api', postRoutes);

// Use the error handling middleware
app.use(errorHandler);

module.exports = app;