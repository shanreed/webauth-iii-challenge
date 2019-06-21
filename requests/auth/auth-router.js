const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secrets = require('../../config/secrets');

const Users = require('../users/users-model.js');


router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;
  Users.add(user)
    .then(newlogininfo => {
      res.status(201).json({message: `Welcome ${user.username}, below is your login information, you will need it next time you login!`, newlogininfo});
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/signin', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({
          message: `Welcome back ${user.username}, your user id is ${user.id}!`,token
        });
  } else{
    res.status(401).json({ message: 'You shall not pass' });
  }
})
    .catch(error => {
      res.status(500).json(error);
    });
});

// creates token
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: ['Student']
  }
  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}





module.exports = router;
