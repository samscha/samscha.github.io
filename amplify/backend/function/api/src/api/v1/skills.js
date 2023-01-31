const router = require('express').Router();

// TODO: move to db
const skills = require('../../temp-db/skills');

router
  .route('/skills')
  .get((req, res) => {
    const primarySkills = skills.filter((s) => {
      return s.set === 'primary' && s.enabled;
    });
    const secondarySkills = skills.filter((s) => {
      return s.set === 'secondary' && s.enabled;
    });

    res.status(200).json({
      primarySkills,
      secondarySkills,
    });
  })
  .all((req, res) => {
    res.sendStatus(405);
  });

exports.router = router;
