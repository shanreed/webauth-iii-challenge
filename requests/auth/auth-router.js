const router = require('express').Router();

const Users = require('../users/users-model.js');


router.post('/register', (req, res) => {
  let user = req.body;
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
        res.status(200).json({
          message: `Welcome back ${user.username}!`
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});



module.exports = router;
