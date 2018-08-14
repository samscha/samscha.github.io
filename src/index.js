const DEBUG = process.env.DEBUG === 'true';
const PORT = process.env.PORT;

const server = require('./server');

server.listen(
  PORT,
  _ => (DEBUG ? console.log(`Listening on port: ${PORT}`) : null),
);
