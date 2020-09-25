'use strict';

const supergoose = require('@code-fellows/supergoose');

const server = require('../server.js');
const request = supergoose(server.app);
const jwt = require('jsonwebtoken');
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
    const parsedToken = jwt.verify(response.body.token, process.env.SECRET);
    console.log('ParsedToken:::::', parsedToken);
    expect(response.body.token).toBeTruthy();
    expect(response.body.user.username).toEqual('chris');
    expect(response.status).toEqual(200);
  });

  it('Post /signin should sign the existing user in with correct credentials', async () => {
    let response = await request.post('/signin').auth('chris', 'password');
    expect(response.body.token).toBeDefined();
  });
});

describe('Test v1 route', () => {});
