const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
    context: helpers.root(),

    entry: {
        vendors: [
            // polyfill
            'core-js/client/shim',
            'zone.js/dist/zone',
            'reflect-metadata',
            // Angular
            'rxjs',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/core',
            '@angular/common',
            '@angular/http',
            '@angular/router'
        ]
    },
    output: {
        path: helpers.root('dll'),
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            './src' // location of your src
        ),

        new webpack.DllPlugin({
            path: './dll/[name]-manifest.json',
            name: '[name]'
        })
    ]
}
