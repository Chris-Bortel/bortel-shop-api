# LAB - Class 13

## Project: auth-server

[deployed at heroku](https://auth-server-cb.herokuapp.com/)

### Author: Chris Bortel

### Links and Resources

- [lab-13 pull request](https://github.com/Chris-Bortel-401-advanced-javascript/auth-server-access-control/pull/1)
<!-- - [ci/cd](http://xyz.com) (GitHub Actions)
- [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable) -->

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

- start the application `nodemon index.js`

- signup using a username and password <br>

  `http post :3000/signup username="chris" password="maddie"`

- to view your information <br>

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
