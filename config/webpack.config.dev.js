const webpack = require('webpack');
const chalk = require('chalk');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');
let config = require('./webpack.config.common');

const AOT = process.env.AOT || false;
const tsConfig = require('./tsloader.conf');

module.exports = function makeWebpackConfig() {
    console.log(chalk.bgBlack.yellow(`Using dev ${AOT ? 'AOT ' : ''}config...`)); // eslint-disable-line no-console

    /**
     * Type of sourcemap to use
     * Reference: https://webpack.js.org/configuration/devtool/#devtool
     */
    config.devtool = 'cheap-module-eval-source-map';

    config.module.rules.push(tsConfig.loader);

    if (tsConfig.plugin) {
        config.plugins.push(tsConfig.plugin);
    }

    config.plugins.push(
        /**
         * Generate common chunks if necessary
         * Reference: https://webpack.js.org/plugins/commons-chunk-plugin/
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),

        /**
         * Extract css files (disabled when in test mode or not in build mode)
         * Reference: https://webpack.js.org/plugins/extract-text-webpack-plugin/
         */
        new ExtractTextPlugin({disable: true})
    );

    return config;
}();
