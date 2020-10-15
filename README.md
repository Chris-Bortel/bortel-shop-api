# Authenticated Api Server

## Project: auth-server

### Author: Chris Bortel

### Links and Resources

[Deployed at heroku](https://auth-server-cb.herokuapp.com/)

### Setup

#### `.env` requirements

- `PORT=3000`

- `MONGODB_URI=mongodb://localhost:27017/auth`

- Add your SECRET to the .env `SECRET=yoursecret`

#### How to initialize/run the application(local)

- Run heroku logs `heroku logs --tail --app auth-server-cb`

- httpie: `http post https://auth-server-cb.herokuapp.com/signup username=chris password=password`

- httpie: `http post https://auth-server-cb.herokuapp.com/signin -a chris:password`

#### How to initialize/run application(local)

- Start the application `nodemon index.js`

- Signup using a username and password <br>

  `http post :3000/signup username="chris" password="maddie"`

- To view your information <br>

  `http :3000/secret "Authorization:Bearer yOurBiG0lTokenklajsdfjklh;qwerp9u;oiujaaf/afdslkh.lkjhasdf-lkuahgsdflkjheuasdlkfugh-_mc`

#### How to use your library (where applicable)

#### Tests

- `npm test` file name of the test
<!-- - How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc -->

#### Attributions

#### Collaboration

- Davee Sok
- Joe Pennock
- Ben Hill
- Diane Stephani
- Sean Murray

#### UML

<!-- Link to an image of the UML for your application and response to events -->
