const AotPlugin = require('@ngtools/webpack').AotPlugin;
const ENV = process.env.NODE_ENV || 'DEV';
const AOT = process.env.AOT || false;
const atlConf = {
    DEV: {
        options: {},
        exclude: [/\.(spec|e2e)\.ts$/]
    },
    PROD: {
        options: {
            removeComments: true
        },
        exclude: [/\.(spec|e2e)\.ts$/]
    },
    TEST: {
        options: {
            inlineSourceMap: true,
            sourceMap: false
        },
        exclude: [/\.(e2e)\.ts$/]
    }
};

const aotLoader = {
    test: /\.ts$/,
    loader: '@ngtools/webpack'
};

const atLoader = {
    test: /\.ts$/,
    use: [
        {
            loader: 'awesome-typescript-loader',
            options: atlConf[ENV].options
        },
        {
            loader: 'angular2-template-loader'
        }
    ],
    exclude: atlConf[ENV].exclude
};

const aotPlugin = new AotPlugin({
    tsConfigPath: 'tsconfig.json'
});

module.exports = {
    loader: AOT ? aotLoader : atLoader,
    plugin: AOT ? aotPlugin : null
};
