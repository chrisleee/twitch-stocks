import * as request from 'supertest';
import { WebAPI } from '../application';
import * as app from '../index';
import * as db from '../index';

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

describe('get /api/login to generate JWT token', () => {
  afterEach(done => {
    app.server.close();
    done();
  });
  it('should give 401 error for unsuccessful login', done => {
    request(app.app)
      .post('/api/login')
      .send('username=null')
      .send('password=null')
      .then(response => {
        expect(response.status).toBe(401);
        expect(response.text).toMatch(
          JSON.stringify({ message: 'no such user found' }),
        );
        done();
      });
  });
  it('should give 401 if incorrect password given', done => {
    request(app.app)
      .post('/api/login')
      .send('username=test_login')
      .send('password=null')
      .then(response => {
        expect(response.status).toBe(401);
        expect(response.text).toMatch(
          JSON.stringify({ message: 'passwords do not match' }),
        );
        done();
      });
  });
  it('should give 200 if correct username/pwd supplied', done => {
    request(app.app)
      .post('/api/login')
      .send('username=test_login')
      .send('password=password')
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.text).toMatch(
          JSON.stringify({ message: 'auth ok', token: response.body.token }),
        );
        done();
      });
  });
});

describe('get /channels with auth', () => {
  let token: any;
  afterEach(done => {
    app.server.close();
    done();
  });
  beforeEach(done => {
    const username = 'username=test_login';
    const password = 'password=password';
    request(app.app)
      .post('/api/login')
      .send(username)
      .send(password)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        token = res.body.token;
        done();
      });
  });
  it('should get json of channels', done => {
    request(app.app)
      .get('/api/channels')
      .set('Authorization', 'JWT ' + token)
      .then(response => {
        expect(response.status).toBe(200);
        done();
      });
  });
  it('should give 404 for random path', done => {
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
  it('should give 404 for random path', done => {
    request(app.app).get('/api/stock/test').then(response => {
      expect(response.status).toBe(404);
      done();
    });
  });
});

describe('get /users', () => {
  afterEach(done => {
    app.server.close();
    done();
  });
  it('should get json of users', done => {
    request(app.app).get('/api/users').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
  it('should give 404 for invalid path', done => {
    request(app.app).get('/api/users/test').then(response => {
      expect(response.status).toBe(404);
      done();
    });
  });
});

describe('get a user from /users/user/', () => {
  afterEach(done => {
    app.server.close();
    done();
  });
  it('should get json of test user', done => {
    request(app.app).get('/api/users/user/test').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
  // This test is probably not ideal; fix it later if there is a better way
  // to test individual users
  it('should give error for invalid user', done => {
    request(app.app).get('/api/users/user/invalidTest').then(response => {
      expect(response.status).toBe(404);
      expect(response.text).toBe(
        JSON.stringify({ Error: 'Unable to find user' }),
      );
      done();
    });
  });
});

afterAll(() => {
  app.db.close();
});
