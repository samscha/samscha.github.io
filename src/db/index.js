exports.connectToDb = _ => {
  switch (process.env.DB) {
    case 'MONGODB':
      return require('./mongo');

    // add other db cases here

    default:
      if (JSON.parse(process.env.DEBUG))
        console.log(`db env var not specified`);
  }
};
