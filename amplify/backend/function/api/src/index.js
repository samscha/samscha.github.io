const serverlessExpress = require('@vendia/serverless-express')

const app = require('./awsapp');

exports.handler = (event, context) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    //awsServerlessExpress.proxy(server, event, context);
    serverlessExpress({ app })(event, context);
};
