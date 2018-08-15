const MONGODB = JSON.parse(process.env.MONGODB);
const DEBUG = JSON.parse(process.env.DEBUG);

const mongoose = require('../../server.dependencies').mongoose;

switch (process.env.NODE_ENV) {
  case 'development':
    const devPath = MONGODB.DEV.path;

    return mongoose
      .connect(
        devPath,
        MONGODB.DEV.options,
      )
      .then(
        _ => {
          console.log(`Connected to ${devPath}`);
        },
        err => {
          console.log(`Error connecting to ${devPath}: ${err}`);
          mongoose.connection.close(_ => {
            console.log('Connection closed before exiting');

            process.exit(1);
          });
        },
      );

  case 'production':
    const prodPath = MONGODB.PROD.path;

    return mongoose
      .connect(
        prodPath,
        MONGODB.PROD.options,
      )
      .then(
        _ => (DEBUG ? console.log(`Connected to ${prodPath}`) : null),
        err => {
          if (DEBUG) console.log(`Error connecting to db: ${err}`);

          process.exit(1);
        },
      );

  default:
    if (JSON.parse(process.env.DEBUG)) console.log(`curr env not specified`);
}
