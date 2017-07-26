import * as request from 'supertest';
import { WebAPI } from '../application';
import * as app from '../index';

describe('Get /', () => {
  it('should return 404', done => {
    request(app).get('/').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
});
