function route(app) {
    app.use('/', require('./site'));
    app.use('/', require('./manage'));
    app.use('/', require('./product'));
}

module.exports = route;
