var webpackConfig = require('../webpack.config.js');

module.exports = function (config) {
    var configuration = {
        basePath: '',

        frameworks: [
            'jasmine',
            'source-map-support'
        ],

        files: [ './config/karma.entry.js' ],

        preprocessors: {
            './config/karma.entry.js': [ 'webpack' ]
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: [
            'mocha',
            'coverage'
        ],

        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {
                    type: 'json',
                    subdir: '.',
                    file: 'coverage.json'
                }
            ]
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [
            'Chrome'
        ],
        singleRun: true
    };

    config.set(configuration);
};
