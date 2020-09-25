'use strict';

const supergoose = require('@code-fellows/supergoose');

const server = require('../server.js');
const request = supergoose(server.app);
require('dotenv').config();

describe(' It should log a 404 for a route that does not exist', () => {
  it('it should log a 404 for a bad route', async () => {
    let response = await request.get('/notHere');
    expect(response.status).toEqual(404);
  });
});

describe('Post /signup should add a new user', () => {
  it('Creates a new user', async () => {
    let obj = {
      username: 'chris',
      password: 'password',
      role: 'admin',
    };
    let response = await request.post('/signup').send(obj);
    expect(response.status).toEqual(200);
  });
});
