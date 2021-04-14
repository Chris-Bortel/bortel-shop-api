# Bortel Shop - API 
Author: Chris Bortel

Crud Node.js and Express Authenticated api server that powers the [Bortel-Shop](https://github.com/Chris-Bortel-401-advanced-javascript/bortel-shop) - Client.

### Deployments 
- [Bortel-Shop](https://auth-server-cb.herokuapp.com) - API

 
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- **Table of Contents** 

  - [Technologies used:](#technologies-used)
  - [Description](#description)
    - [Links and resources](#links-and-resources)
  - [API Server](#api-server)
  - [Auth Server](#auth-server)
  - [Development setup](#development-setup)
    - [`.env` requirements](#env-requirements)
  - [How to initialize/run the application](#how-to-initializerun-the-application)
    - [Api server](#api-server)
    - [Authentication server](#authentication-server)
      - [Running the initial api](#running-the-initial-api)
    - [Authorization](#authorization)
      - [How to use your library (where applicable)](#how-to-use-your-library-where-applicable)
      - [Tests](#tests)
      - [Attributions](#attributions)
    - [Citation](#citation)
      - [UML](#uml)
    - [Notes/Bugs](#notesbugs) -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



### Technologies used:
- JavaScript, Node.js, Express, Superagent, Axios, Bcyrpt, Base-64, JWT, MongoDB


## Description

<!-- - **Bortel's Shop backend** [deployed to Heroku](https://auth-server-cb.herokuapp.com/) -->
<!-- Crud application that is used in conjunction with an e-commerce `Bortel's Shop` storefront React.js based [frontend](https://github.com/Chris-Bortel-401-advanced-javascript/bortel-shop).   -->


Built as an CRUD authenticated API that powers several types of applications. Including `Bortel Shop - client` 

<!-- TODO: Should I include this? -->
, <br>  a TODO list application, and a REST api interface(think Postman or Insomnia).

- Categories and Products 

Utilizes a Mongo database
## Auth Server 
(Currently not plugged in to the frontend)


- Authorization that includes `guest, author, editor, admin`
```
const roles = {
  guest: ['read'],
  author: ['read', 'create'],
  editor: ['read', 'update', 'delete'],
  admin: ['read', 'create', 'update', 'delete'],
};
``` 

## Installation and development setup
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

