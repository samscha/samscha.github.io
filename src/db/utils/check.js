exports.dbConnection = _ => {
  switch (process.env.DB) {
    case 'MONGODB':
      const readyState = require('mongoose').connection.readyState;

      switch (readyState) {
        case 0:
          return { state: false, message: `disconnected from db` };
        case 1:
          return { state: true };
        case 2:
          return { state: false, message: `connecting to db` };
        case 3:
          return { state: false, message: `disconnecting from db` };
        default:
          return { state: false, message: `unknown ready state` };
      }

    // add other db connection status checks here

    default:
      if (JSON.parse(process.env.DEBUG))
        console.log(`db env var not specified`);
  }
};
