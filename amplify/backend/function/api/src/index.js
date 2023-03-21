const serverlessExpress = require('@vendia/serverless-express')

//const awsServerlessExpress = require('aws-serverless-express');
const app = require('./awsapp');

//const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    //awsServerlessExpress.proxy(server, event, context);
    serverlessExpress({ app })(event, context);
};

//exports.handler = serverlessExpress({ app });
