const AWS = require('aws-sdk');
const bluebird = require('bluebird');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

AWS.config.update({ region: 'us-west-2' });

AWS.config.setPromisesDependency(bluebird);

module.exports = new AWS.S3();
