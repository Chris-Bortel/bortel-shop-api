'use strict';

const express = require('express');

const basicAuth = require('../middleware/basic.js');
const bearer = require('../middleware/bearer.js');
const can = require('../middleware/acl.js');
const users = require('../models/users-model.js');

// Initialize Express Router
const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try {
    let obj = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
    };

    // Create a new instance from the schema, using that object
    let record = new users(obj);

    // Save that instance to the database
    let newUser = await record.save();

    let token = record.generateToken();

    res.set('auth', token);
    let object = {
      token: token,
      user: newUser,
    };
    res.status(201).json(object);
  } catch (e) {
    next(e.message);
  }
});

router.get('/users', bearer, getUsers);
async function getUsers(req, res, next) {
  try {
    let allUsers = await users.find({});
    res.set('auth', req.token);
    res.status(200).json(allUsers);
  } catch (e) {
    next(e);
  }
}

router.post('/signin', basicAuth, (req, res, next) => {
  res.set('auth', req.token);
  let object = {
    token: req.token,
    user: req.user,
  };
  res.status(200).json(object);
});

router.get('/secret', bearer, (req, res) => {
  res.status(200).send(`Welcome, ${req.user.username}`);
});

router.get('/article', bearer, can('read'), (req, res) => {
  res.status(200).send('You can read it');
});

router.post('/article', bearer, can('create'), (req, res) => {
  res.status(201).send('You can create it');
});

router.put('/article', bearer, can('update'), (req, res) => {
  res.status(201).send('You can update it');
});

module.exports = router;
