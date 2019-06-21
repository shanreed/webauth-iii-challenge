const express = require('express');
const cors = require('cors');

const usersRouter = require('../requests/users/users-router');
const authRouter = require('../requests/auth/auth-router');

const server = express();

server.use(express.json());
server.use(cors());



server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
    res.json('API WORKING' );
  });
  
  module.exports = server;