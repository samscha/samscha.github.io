module.exports = (app) => {
  const server = require('http').createServer(app);
  const debug = require('debug')('root:server');

  const onError = (error) => {
    if (error.syscall !== 'listen') throw error;

    const bind = typeof app.port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  const onListening = () => {
    const addr = server.address();
    const bind =
      typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

    debug('Listening on ' + bind);
  };

  server.listen(app.get('port'));
  server.on('error', onError);
  server.on('listening', onListening);

  return server;
};
