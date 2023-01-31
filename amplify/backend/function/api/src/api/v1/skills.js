const router = require('express').Router();

// TODO: move to db
const skills = require('../../temp-db/skills');

router.route('/skills').get((req, res) => {
  res.status(200).json(skills);
}).all((req,res) => {
res.sendStatus(405)
});

exports.router = router;
