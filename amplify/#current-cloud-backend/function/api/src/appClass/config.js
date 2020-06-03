const configs = [];

configs.push(
    require('express').static(
        require('path').join(__dirname, '../../client/build'),
    ),
);

if (process.env.NODE_ENV === 'development') {
    configs.push(require('morgan')('combined'));
}

configs.push(require('helmet')());

module.exports = configs;
