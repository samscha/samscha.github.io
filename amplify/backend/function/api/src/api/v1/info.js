const router = require('express').Router();

// TODO: move to db
const infoData = require('../../temp-db/infos');

router
  .route('/info')
  .get((req, res) => {
    const types = convertReqQueryToArr(req.query.type);
    // TODO: add sort handling

    const info = infoData
      .filter((i) => {
        return i.enabled;
      })
      .filter((i) => {
        if (types.length === 0) {
          return true;
        }

        return types.includes(i.type);
      });

    res.status(200).json({
      info,
    });
  })
  .all((req, res) => {
    res.sendStatus(405);
  });

exports.router = router;

const convertReqQueryToArr = (reqQuery) => {
  if (Array.isArray(reqQuery)) {
    return reqQuery.filter((q) => Boolean(q));
  }

  if (typeof reqQuery === 'string') {
    return [reqQuery];
  }

  return [];
};
