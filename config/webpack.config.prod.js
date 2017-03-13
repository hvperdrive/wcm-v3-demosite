const webpack = require('webpack');
const chalk = require('chalk');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');
const isProd = process.env.NODE_ENV === 'PROD';
let config = require('./webpack.config.common');

const AOT = process.env.AOT || false;
const tsConfig = require('./tsloader.conf');

module.exports = function makeWebpackConfig() {
    console.log(chalk.bgBlack.yellow(`Using prod ${AOT ? 'AOT ' : ''}config...`)); // eslint-disable-line no-console

    /**
     * Type of sourcemap to use
     * Reference: https://webpack.js.org/configuration/devtool/#devtool
     */
    config.devtool = 'cheap-module-source-map';

    /**
     * The location of the generated bundles
     * Reference: https://webpack.js.org/configuration/output/
     */
    config.output = {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: 'js/[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    };

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
         * Extract css files
         * Reference: https://webpack.js.org/plugins/extract-text-webpack-plugin/
         */
        new ExtractTextPlugin({
            filename: 'css/[name].[hash].css',
            disable: !isProd
        }),

        /**
         * Only emit files when there are no errors
         * Reference: https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin (no updated docs yet)
         */
        new webpack.NoEmitOnErrorsPlugin(),

        /**
         * Minify all javascript, switch loaders to minimizing mode
         * Reference: https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
         */
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: {
                keep_fnames: true
            }
        }),

        /**
         * Copy assets from the public folder
         * Reference: https://github.com/kevlened/copy-webpack-plugin
         */
        new CopyWebpackPlugin([{
            from: helpers.root('src/public')
        }])
    );

    return config;
}();
