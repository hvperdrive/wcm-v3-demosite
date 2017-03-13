module.exports = function () {
    switch (process.env.NODE_ENV) {
        case 'PROD':
        case 'production':
        case 'build':
            return require('./config/webpack.config.prod');
        case 'TEST':
        case 'testing':
            return require('./config/webpack.config.test');
        default:
            return require('./config/webpack.config.dev');
    }
}();
