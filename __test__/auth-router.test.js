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

// V1 (Unauthenticated API) routes
describe(' V1 (unprotected routes) should have all of the CRUD functionality ', () => {
  it(' POST /api/v1/todo adds an item to the DB and returns an object with the added item ', async () => {
    // let test = testing;
  });

  it(' GET /api/v1/todo returns a list of todo items ', async () => {
    // let test = testing;
  });

  it(' GET /api/v1/todo/ID returns a single item by ID ', async () => {
    // let test = testing;
  });

  it(' PUT /api/v1/todo/ID returns a single, updated item by ID ', async () => {
    // let test = testing;
  });

  it(' DELETE /api/v1/todo/ID returns an empty object. Subsequent GET for the same ID should result in nothing found', async () => {
    // let test = testing;
  });
});
