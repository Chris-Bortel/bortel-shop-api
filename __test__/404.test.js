// Proof of life ////

describe(' It should log a 404 for a route that does not exist', () => {
  it('it should log a 404 for a bad route', async () => {
    let response = await request.get('/notHere');
    expect(response.status).toEqual(404);
  });
});
