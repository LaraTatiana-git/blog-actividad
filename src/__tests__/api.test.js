const request = require('supertest');
const sequelize = require('../../config/db');
const app = require('../../server');

beforeAll(async () => {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('API Tests', () => {
    let authorId;
    let postId;

    describe('Author endpoints', () => {
        test('should create a new author', async () => {
            const response = await request(app)
                .post('/api/authors')
                .send({
                    nombre: 'John Doe',
                    email: 'john@example.com',
                    imagen: 'john.png'
                });
            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('id');
            authorId = response.body.id;
        });

        test('should get all authors', async () => {
            const response = await request(app)
                .get('/api/authors');
            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });

        test('should handle invalid author data', async () => {
            const response = await request(app)
                .post('/api/authors')
                .send({
                    nombre: 'Invalid Author'
                    // Missing required email
                });
            expect(response.statusCode).toBe(400);
        });
    });

    describe('Post endpoints', () => {
        test('should create a new post', async () => {
            const response = await request(app)
                .post('/api/posts')
                .send({
                    titulo: 'Test Post',
                    descripcion: 'Test Description',
                    categoria: 'Test',
                    autor_id: authorId
                });
            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('id');
            postId = response.body.id;
        });

        test('should get all posts', async () => {
            const response = await request(app)
                .get('/api/posts');
            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
        });

        test('should get posts by author', async () => {
            const response = await request(app)
                .get(`/api/posts/author/${authorId}`);
            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body[0].autor_id).toBe(authorId);
        });

        test('should handle invalid post data', async () => {
            const response = await request(app)
                .post('/api/posts')
                .send({
                    descripcion: 'Test Description'
                    // Missing required titulo
                });
            expect(response.statusCode).toBe(400);
        });
    });
});