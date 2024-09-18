import request from 'supertest';
import app from '../../src/app';

describe('Pipeline API', () => {
  it('should create a new pipeline', async () => {
    const response = await request(app).post('/api/pipelines').send({
      name: 'New Pipeline',
      status: 'running',
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  // Add more tests...
});
