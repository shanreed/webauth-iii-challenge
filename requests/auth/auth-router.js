const router = require('express').Router();
const bcrypt = require('bcryptjs');

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

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          message: `Welcome back ${user.username}!`
        });
  } else{
    res.status(401).json({ message: 'Invalid Credentials' });
  }
})
    .catch(error => {
      res.status(500).json(error);
    });
});






module.exports = router;
