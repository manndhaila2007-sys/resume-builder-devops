const request = require('supertest');
const app = require('../server');

describe('Server API Tests', () => {
  it('should return 200 OK on /api/health', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
  });

  it('should serve the index.html on root /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Resume Builder Pro');
  });
});
