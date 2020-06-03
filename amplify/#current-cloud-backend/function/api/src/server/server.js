module.exports = class {
    constructor(app) {
        this.server = require('http').createServer(app.self);
        this.app = app;
        this.debug = require('debug')('root:server');

        this.server.listen(this.app.port);
        this.server.on('error', this.onError.bind(this));
        this.server.on('listening', this.onListening.bind(this));
    }

    get self() {
        return this.server;
    }

    onError(error) {
        if (error.syscall !== 'listen') throw error;

        const bind =
            typeof this.app.port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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
    }

    onListening() {
        const addr = this.server.address();
        const bind =
            typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        this.debug('Listening on ' + bind);
    }
};
