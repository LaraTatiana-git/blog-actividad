const Author = require('../models/author');

exports.createAuthor = async (req, res) => {
    try {

        console.log('Request body:', {
            nombre: req.body.nombre,
            email: req.body.email,
            imagen: req.body.imagen,
            bodyType: typeof req.body,
            contentType: req.headers['content-type']
        });


        if (!req.body.nombre || !req.body.email) {
            return res.status(400).json({
                error: 'Validation error',
                details: 'nombre and email are required fields'
            });
        }

        const author = await Author.create({
            nombre: req.body.nombre,
            email: req.body.email,
            imagen: req.body.imagen
        });


        console.log('Author created successfully:', author.id);
        return res.status(201).json(author);

    } catch (error) {

        console.error('Create author error:', {
            name: error.name,
            message: error.message,
            validation: error.errors?.map(e => ({
                field: e.path,
                type: e.type,
                message: e.message
            }))
        });


        return res.status(400).json({
            error: error.name,
            message: error.message,
            details: error.errors?.map(e => ({
                field: e.path,
                message: e.message
            }))
        });
    }
};