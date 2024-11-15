const errorHandler = (err, req, res, next) => {
    // Log error details
    console.error('Error details:', {
        name: err.name,
        message: err.message,
        code: err.code,
        stack: err.stack
    });

    // Database validation errors
    if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({
            error: 'Validation error',
            details: err.errors.map(e => e.message)
        });
    }

    // Database connection errors
    if (err.name === 'SequelizeConnectionError') {
        return res.status(503).json({
            error: 'Database connection error',
            details: err.original?.sqlMessage || err.message
        });
    }

    // Authentication errors
    if (err.name === 'SequelizeAccessDeniedError') {
        return res.status(401).json({
            error: 'Database authentication failed',
            details: 'Please check database credentials'
        });
    }

    // Foreign key errors
    if (err.name === 'SequelizeForeignKeyConstraintError') {
        return res.status(400).json({
            error: 'Foreign key constraint error',
            details: err.original?.sqlMessage
        });
    }

    // Default error
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
};

module.exports = errorHandler;