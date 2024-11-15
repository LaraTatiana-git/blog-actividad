const request = require('supertest');
const app = require('../app');

describe('Blog API Tests', () => {
    let authorId;

    test('Create Author', async () => {
        const res = await request(app)
            .post('/api/author')
            .send({ name: 'John Doe' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        authorId = res.body.id;
    });
});