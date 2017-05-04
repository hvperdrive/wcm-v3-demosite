const helpers = require('./helpers');
const chalk = require('chalk');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = require('./webpack.config.common');
const tsConfig = require('./tsloader.conf');

module.exports = function makeWebpackConfig() {
    console.log(chalk.bgBlack.yellow('Using test config...')); // eslint-disable-line no-console

    config.devtool = 'inline-source-map';

    delete config.entry; // revert to setting empty object when https://github.com/webpack-contrib/karma-webpack/pull/221/commits/1f8b5132ceab70c9d5df1f3faa1bbf73da3647e2 is merged

    config.output = {};

    config.module.rules.push(tsConfig.loader);

    config.module.rules.push({
        test: /\.ts*/,
        enforce: 'post',
        include: helpers.root('src'),
        loader: 'istanbul-instrumenter-loader',
        exclude: [
            /\.(e2e|spec)\.ts$/,
            /node_modules/
        ]
    });

    config.plugins.push(
        /**
         * Extract css files (disabled when in test mode or not in build mode)
         * Reference: https://webpack.js.org/plugins/extract-text-webpack-plugin/
         */
        new ExtractTextPlugin({disable: true})
    );

    return config;
}();
