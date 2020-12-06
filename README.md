# LAB - Class 13

## Project: auth-server

### Author: Chris Bortel

### Links and Resources
- [Deployed to Heroku](https://auth-server-cb.herokuapp.com/)
- [lab-13 pull request](https://github.com/Chris-Bortel-401-advanced-javascript/auth-server-access-control/pull/1)
<!-- - [ci/cd](http://xyz.com) (GitHub Actions)
- [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable) -->

### Setup

#### `.env` requirements

- `PORT=3000`
- `MONGODB_URI=mongodb://localhost:27017/auth`
- Add your SECRET to the .env `SECRET=yoursecret`

#### How to initialize/run your application

- start the application `nodemon index.js`
- signup using a username and password <br>
  `http post :3000/signup username="chris" password="maddie"`
- to view your information <br>
  `http :3000/secret "Authorization:Bearer yOurBiG0lTokenklajsdfjklh;qwerp9u;oiujaaf/afdslkh.lkjhasdf-lkuahgsdflkjheuasdlkfugh-_mc`

#### Running the initial api

```
- to view what is initially in the api
http :3000/api/v1/categories
http post :3000/api/v1/categories name=electronics description="gadgets'
- view json object that you just created
http :3000/api/v1/categories

http put :3000/api/v1/categories description="Both desktops and laptops"
```


### Authorization

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

### Notes/Bugs

- getAll route is buggy

basic api
