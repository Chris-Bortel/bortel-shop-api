describe(' V2 Authenticated API Routes should have all of the CRUD functionality depending on users credentials ', () => {
  it(' POST /api/v2/todo with a bearer token that has create permissions adds an item to the DB and returns an object with the added item ', async () => {
    // let test = testing;
  });

  it(' GET /api/v2/todo with a bearer token that has read permissions returns a list of todo items ', async () => {
    // let test = testing;
  });

  it(' GET /api/v2/todo/ID with a bearer token that has read permissions return a single item by id ', async () => {
    // let test = testing;
  });

  it(' PUT /api/v2/todo/ID with a bearer token that has update permissions returns a single, updated item by ID ', async () => {
    // let test = testing;
  });

  it(' DELETE /api/v2/todo/ID with a bearer token that has delete permissions returns an empty object. Subsequent GET for the same ID should result in nothing found', async () => {
    // let test = testing;
  });
});
