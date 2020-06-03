module.exports = class {
    constructor(routes) {
        this.router = require('express').Router();
        this.routes = routes;

        this.routes.forEach(route => this.router.use('/api', route));
        this.router.route('*').get((req, res) => {
            res.sendFile(
                require('path').join(
                    __dirname,
                    '../../client/build',
                    'index.html',
                ),
            );
        });
    }

    get self() {
        return this.router;
    }
};
