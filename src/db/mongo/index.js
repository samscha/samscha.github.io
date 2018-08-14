const MONGODB = JSON.parse(process.env.MONGODB);

const mongoose = require('../../server.dependencies').mongoose;

// if (process.env.CURR_ENV === 'DEV') {
//   mongoose
//     .connect(
//       MONGODB.DEV.path,
//       MONGODB.DEV.options,
//     )
//     .then(
//       _ => console.log(`Connected to ${MONGODB.DEV.path}`),
//       err => console.log(`Error connecting to ${MONGODB.DEV.path}: ${err}`),
//     );
// } else if (process.env.CURR_ENV === 'PROD') {
//   mongoose
//     .connect(
//       MONGODB.PROD.path,
//       MONGODB.PROD.options,
//     )
//     .then(_ => _, err => console.log(`Error connecting to db: ${err}`));
// } else {
//   if (JSON.parse(process.env.DEBUG)) console.log(`curr env not specified`);
// }

switch (process.env.CURR_ENV) {
  case 'DEV':
    return mongoose.connect(
      MONGODB.DEV.path,
      MONGODB.DEV.options,
      err => {
        if (err) {
          console.log(`Error connecting to ${MONGODB.DEV.path}: ${err}`);
          return;
        }

        console.log(`Connected to ${MONGODB.DEV.path}`);
      },
    );

  case 'PROD':
    return mongoose.connect(
      MONGODB.PROD.path,
      MONGODB.PROD.options,
      err => {
        if (err) console.log(`Error connecting to db: ${err}`);
      },
    );

  default:
    if (JSON.parse(process.env.DEBUG)) console.log(`curr env not specified`);
}
