import * as request from 'supertest';
import { WebAPI } from '../application';
import * as app from '../index';

describe('Get /', () => {
  afterEach(done => {
    app.server.close();
    done();
  });
  it('should return 404', done => {
    request(app.app).get('/').then(response => {
      expect(response.status).toBe(404);
      done();
    });
  });
});

describe('get /channels', () => {
  afterEach(done => {
    app.server.close();
    done();
  });
  it('should get json of channels', done => {
    request(app.app).get('/api/channels').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
  it('should give 404 for random  path', done => {
    request(app.app).get('/api/channels/test').then(response => {
      expect(response.status).toBe(404);
      done();
    });
  });
});

describe('get /stock', () => {
  afterEach(done => {
    app.server.close();
    done();
  });
  it('should get json of stock', done => {
    request(app.app).get('/api/stock').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
  it('should give 404 for random  path', done => {
    request(app.app).get('/api/stock/test').then(response => {
      expect(response.status).toBe(404);
      done();
    });
  });
});
