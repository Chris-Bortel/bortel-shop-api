# Bortel's Shop
### Author: Chris Bortel
### Links and resources
- **Bortel's Shop backend** [deployed to Heroku](https://auth-server-cb.herokuapp.com/)
Crud application that is used in conjunction with an e-commerce `Bortel's Shop` storefront React.js based [frontend](https://github.com/Chris-Bortel-401-advanced-javascript/bortel-shop).  
##  API Server
- Powers the `Bortel's Shop` storefront
- Categories and Products

Built as an authenticated backend for several types of applications. Including an e-commerce storefront, a TODO list application, and a REST api interface(think Postman or Insomnia).

Utilizes a Mongo date
## Authenticated and authorized server 
(Currently not plugged in to the frontend)
### Technologies used: JavaScript, Node.js, Express, Superagent, Axios, Bcyrpt, Base-64, JWT, MongoDB
- Authorization that includes `guest, author, editor, admin`
```
const roles = {
  guest: ['read'],
  author: ['read', 'create'],
  editor: ['read', 'update', 'delete'],
  admin: ['read', 'create', 'update', 'delete'],
};
``` 

## Development setup
Clone to your local machine
```
git clone https://github.com/Chris-Bortel-401-advanced-javascript/auth-server-access-control.git
```
Create a .env file and add a `PORT`, `MONGODB_URI`, and a `SECRET`
### `.env` requirements

- `PORT=<YourPort>`
- `MONGODB_URI=mongodb://localhost:27017/auth`
- Add your `SECRET` to the .env

## How to initialize/run the application

- start the application `nodemon index.js`

### Api server
<!-- Need to add this information -->
### Authentication server
- **Use `/api/v2`**
- Follow the user model in order to signup in any http tester(ie. Portman, Insomnia, Httpie)<br>
  `http post :3000/signup username="chris" password="maddie"`
- To view your restricted information based on your access, use the token that is given to you on sign in. <br>
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
This application needs tests, I am currently working on those, and in the future I will be utilizing test driven development.
- `npm test` file name of the test
<!-- - How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc -->

#### Attributions

### Citation

#### UML

<!-- Link to an image of the UML for your application and response to events -->

### Notes/Bugs

