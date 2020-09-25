'use strict';

const supergoose = require('@code-fellows/supergoose');

const server = require('../server.js');
const request = supergoose(server.app);
const jwt = require('jsonwebtoken');
require('dotenv').config();

describe('Post /signup should add a new user', () => {
  it('Creates a new user', async () => {
    let obj = {
      username: 'chris',
      password: 'password',
      role: 'admin',
    };
    let response = await request.post('/signup').send(obj);
    jwt.verify(response.body.token, process.env.SECRET);
    expect(response.body.token).toBeTruthy();
    expect(response.body.user.username).toEqual('chris');
    expect(response.status).toEqual(200);
  });

  it('Signs the existing user in with correct credentials', async () => {
    let response = await request.post('/signin').auth('chris', 'password');
    expect(response.body.token).toBeDefined();
  });
});

describe('Test v1 route', () => {});
