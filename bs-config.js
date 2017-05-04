const SERVER_CONFIG = require('./package.json').config;

const ENV = process.env.NODE_ENV || 'DEV';

module.exports = {
    "port": SERVER_CONFIG.app.port,
    "server": {
        'baseDir': ENV === 'TEST' ? './coverage/lcov-report' : './dist'
    }
};
