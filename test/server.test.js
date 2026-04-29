const request = require('supertest');
const app = require('../app/server');

// Automated Test Suite - runs automatically in CI/CD pipeline
describe('App API Tests', () => {

  // Test 1: Health check endpoint
  it('GET /api/health should return 200 OK', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
  });

  // Test 2: Home page loads
  it('GET / should serve the home page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Interactive Resume Builder');
  });

});
