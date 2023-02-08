const router = require('express').Router();

// TODO: move to db
const contactsData = require('../../temp-db/contacts');

router
  .route('/contacts')
  .get((req, res) => {
    const contacts = contactsData
      .filter((c) => {
        return c.enabled;
      })
      .sort(sortFunc);

    res.status(200).json({
      contacts,
    });
  })
  .all((req, res) => {
    res.sendStatus(405);
  });

exports.router = router;

const sortFunc = (a, b) => {
  a = a.text.toUpperCase();
  b = b.text.toUpperCase();

  if (a.length > b.length) return -1;
  if (a.length < b.length) return 1;
  return 0;
};
