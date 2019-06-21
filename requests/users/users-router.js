const express = require("express");

const Users = require("./users-model");
const restricted = require('../auth/restricted-middleware');
const checkRole = require('../auth/check-role-middleware');

const router = express.Router();

router.get("/", restricted, checkRole('Student'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;