const router = require('express').Router();

// TODO: move to db
const location = 'Austin, TX';

router
  .route('/location')
  .get((req, res) => {
    res.status(200).json({
      location,
    });
  })
  .all((req, res) => {
    res.sendStatus(405);
  });

exports.router = router;
