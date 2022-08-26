/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */const awsServerlessExpress = require('aws-serverless-express');
const app = require('./awsapp');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    awsServerlessExpress.proxy(server, event, context);
};
