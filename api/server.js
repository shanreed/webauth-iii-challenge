const express = require('express');

const usersRouter = require('../requests/users/users-router');
const authRouter = require('../requests/auth/auth-router');

const server = express();

server.use(express.json());


server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
    res.json('API WORKING' );
  });
  
  module.exports = server;