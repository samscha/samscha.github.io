const {
  //SSM,
SSMClient,
GetParametersCommand
} = require("@aws-sdk/client-ssm");
const router = require('express').Router();
//const secrets = require('../../app/secrets');

// TODO: move into an auth middleware
const tempAuth = async (req, res, next) => {


const client = new SSMClient();
const command = new GetParametersCommand({
      Names: ["AUTH_KEY_TEMP"].map(secretName => process.env[secretName]),
      WithDecryption: true,

});

const response = await client.send(command);
console.log('res',response);

/*
  const { Parameters } = await (new SSM())
    .getParameters({
      Names: ["AUTH_KEY_TEMP"].map(secretName => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();
*/

//const authKey = Parameters.pop().Value;
const authKey = response.Parameters.pop().Value;

  //const authKey = secrets.get('AUTH_KEY_TEMP');

  if (req.headers.auth1 === authKey) {
    next();
    return;
  }

  res.sendStatus(403);
  return;
};

router
  .route('/content')
  .get((req, res) => {
    res.json({ success: 'get content succeed', url: req.url });
  })
  .all((req, res) => res.sendStatus(405));

router
  .route('/content/version')
  .get(tempAuth, (req, res) => {
    res.json({ vers: process.version });
  })
  .all((req, res) => res.sendStatus(405));

router
  .route('/content/*')
  .get((req, res) => {
    res.json({ success: 'get content * succeed', url: req.url });
  })
  .all((req, res) => res.sendStatus(405));

module.exports = router;
