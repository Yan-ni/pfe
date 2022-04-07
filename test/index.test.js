const request = require('supertest');
const app = require('../app');

describe('GET /api', () => {
  test('GET /api/contrat', async () => {
    await app.startDatabase();
    const response = await request(app).get('/api/contrat');

    expect(response.statusCode).toBe(200);
  });
});
