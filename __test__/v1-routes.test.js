const supergoose = require('@code-fellows/supergoose');

const server = require('../server.js');
const request = supergoose(server.app);
require('dotenv').config();

// V1 (Unauthenticated API) routes
describe(' V1 (unprotected routes) should have all of the CRUD functionality ', () => {
  it(' POST /api/v1/todo adds an item to the DB and returns an object with the added item ', async () => {
    let item = {
      text: 'text1',
    };
    let response = await request.post('/api/v1/todo').send(item);
    console.log('response.body', response.body);
    console.log('response.status', response.status);
    expect(response.status).toEqual(200);
    expect(response.body._id).toBeDefined();
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
