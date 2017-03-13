const path = require('path');

// Helper functions
const ROOT = path.resolve(__dirname, '..');

const hasProcessFlag = (flag) => {
    return process.argv.join('').indexOf(flag) > -1;
};

const isWebpackDevServer = () => {
    return process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1]));
};

const root = (...args) => {
    return path.join.apply(path, [ROOT].concat(args));
};

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
