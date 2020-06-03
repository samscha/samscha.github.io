module.exports = class {
  constructor(router) {
    this.app = require('express')();
    this.helpers = require('./helpers');
    this.config = require('./config');
    this.router = router;
    this.port = this.helpers.normalizePort();

    this.app.set('port', this.port);
    this.config.forEach((config) => this.app.use(config));
    this.app.use('/', this.router.self);
    var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
    this.app.use(awsServerlessExpressMiddleware.eventContext());
    // var bodyParser = require('body-parser');
    // this.app.use(bodyParser.json())
    //Enable CORS for all methods
    // this.app.use(function (req, res, next) {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header(
    //         'Access-Control-Allow-Headers',
    //         'Origin, X-Requested-With, Content-Type, Accept',
    //     );
    //     next();
    // });
    this.app.use((req, res) => {
      res.sendStatus(404);
    });

    this.app.listen(3000, function () {
      console.log('App started');
    });
  }

  get self() {
    return this.app;
  }
};
