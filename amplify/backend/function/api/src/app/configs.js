const configs = [];

if (process.env.NODE_ENV === 'development') {
    configs.push(require('morgan')('combined'));
}

configs.push(require('helmet')());

// Enable CORS for all methods
configs.push((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

module.exports = configs;
