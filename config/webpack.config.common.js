const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const headerInjector = require('./header-injector');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV || 'DEV';
const METADATA = require('./metadata.js');
const HEADERCONFIG = require('./head.conf.js');
const SERVERCONFIG = require('../package.json').config;

const sassLoaderOptions = {
    includePaths: [
        helpers.root('node_modules'),
        helpers.root('bower_components')
    ]
};
const postCssLoaderOptions = {
    plugins: () => [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ]
};

module.exports = {
    /**
     * Context
     * Reference: https://webpack.js.org/configuration/entry-context/#context
     */
    context: helpers.root('src'),

    /**
     * Entry
     * Reference: https://webpack.js.org/configuration/entry-context/#entry
     */
    entry: {
        'polyfills': './polyfills.ts',
        'vendor': './vendor.ts',
        'app': './main.ts'
    },

    /**
     * Output
     * Reference: https://webpack.js.org/configuration/output/
     */
    output: {
        path: helpers.root('dist'),
        publicPath: `http://localhost:${SERVERCONFIG.app.port}/`,
        filename: 'js/[name].js',
        chunkFilename: '[id].chunk.js'
    },

    /**
     * Resolve
     * Reference: https://webpack.js.org/configuration/resolve/
     */
    resolve: {
        extensions: [ '.ts', '.js', '.json', '.css', '.scss', '.html' ],
        modules: [
            helpers.root('node_modules'),
            helpers.root('bower_components'),
            helpers.root('src')
        ]
    },

    /**
     * Loaders
     * Reference: https://webpack.js.org/configuration/module/#module-rules
     * Available loaders: https://webpack.js.org/loaders/
     */
    module: {
        rules: [
            // tslint support
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                include: [
                    helpers.root('src')
                ],
                options: {
                    emitErrors: false,
                    failOnHint: false
                }
            },

            // Support for plain (img & font) files
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?'
                }
            },

            // Support for images
            {
                test: /\.(png|jpe?g|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]?'
                }
            },

            // Support for CSS as raw text
            // all css in src/style will be bundled
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'raw-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: postCssLoaderOptions
                        }
                    ]
                })
            },

            // support for .scss files
            // all scss/sass in src/style will be bundled
            {
                test: /\.(scss|sass)$/,
                exclude: helpers.root('src', 'app'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'raw-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: sassLoaderOptions
                        },
                        {
                            loader: 'postcss-loader',
                            options: postCssLoaderOptions
                        }
                    ]
                })
            },

            // all css required in src/app files will be merged in js files
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                use: [
                    {
                        loader: 'raw-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: postCssLoaderOptions
                    }
                ]
            },

            // all scss/sass required in src/app files will be merged in js files
            {
                test: /\.(scss|sass)$/,
                include: helpers.root('src', 'app'),
                use: [
                    {
                        loader: 'raw-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: sassLoaderOptions
                    },
                    {
                        loader: 'postcss-loader',
                        options: postCssLoaderOptions
                    }
                ]
            },

            // support for .html as raw text
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: helpers.root('src', 'public')
            }
        ]
    },

    /**
     * Plugins
     * Reference: https://webpack.js.org/configuration/plugins/
     * Available plugins: https://webpack.js.org/plugins/
     */
    plugins: [
        /**
         * Define free variables
         * Reference: https://webpack.js.org/plugins/define-plugin/
         */
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),

        /**
         *  Workaround needed for angular 2 https://github.com/angular/angular/issues/11580
         */
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src') // location of your src
        ),

        new webpack.DllReferencePlugin({
            manifest: require(helpers.root('/dll/vendors-manifest.json'))
        }),

        /**
         * Automagically create favicons for targeted systems
         * Reference: https://github.com/jantimon/favicons-webpack-plugin
         */
        new FaviconsWebpackPlugin({
            logo: helpers.root('src/public/gfx/favicon.png'),
            prefix: 'icons-[hash]/',
            emitStats: false,
            statsFilename: 'manifest.json',
            persistentCache: true,
            inject: true,
            background: METADATA.themeColor,
            title: METADATA.title,
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                yandex: false,
                windows: false
            }
        }),

        /**
         * Parse index.html and replace keys
         * Reference: https://github.com/jantimon/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: METADATA.title,
            chunksSortMode: 'dependency',
            metadata: METADATA,
            headTags: headerInjector(HEADERCONFIG),
            inject: 'body'
        }),

        /**
         * Support for stylelint (follows @import statements)
         * Reference: https://github.com/JaKXz/stylelint-webpack-plugin
         */
        new StyleLintPlugin({
            context: helpers.root('src'),
            syntax: 'scss'
        }),

        new CopyWebpackPlugin([
            {
                from: helpers.root('node_modules/core_branding_scss/dist/assets'),
                to: 'assets'
            }
        ])
    ],

    /*
     * Node configuration (add mocks for fetch)
     *
     * Reference: https://webpack.js.org/configuration/node/
     */
    node: {
        dns: 'mock', // fetch required setting
        net: 'mock', // fetch required setting
        global: true,
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    },

    /**
     * Dev server configuration
     * Reference: https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
        contentBase: helpers.root('/src/public'),
        historyApiFallback: true,
        watchOptions: {
           aggregateTimeout: 300,
            poll: 1000
        },
        quiet: true,
        stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
    }
};
