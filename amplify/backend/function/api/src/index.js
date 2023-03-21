/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["AUTH_KEY_TEMP"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
const serverlessExpress = require('@vendia/serverless-express')

const app = require('./awsapp');

exports.handler = (event, context) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    //awsServerlessExpress.proxy(server, event, context);
    serverlessExpress({ app })(event, context);
};
