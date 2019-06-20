const express = require("express");


const db = require("../../database/dbConfig");
const Users = require("./users-model");

const router = express.Router();

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;