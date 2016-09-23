var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        files: [
            './test/**/*-test.js'
        ],
        preprocessors: {
            './test/**/*-test.js': ['webpack', 'sourcemap']
        },
        frameworks: ['mocha'],
        browsers: ['PhantomJS'],
        reporters: ['coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                preLoaders: [{
                    test: /\.(js|jsx)$/,
                    include: /app/,
                    exclude: /node_modules/,
                    loader: 'isparta'
                }, {
                    test: /\.json$/,
                    exclude: /node_modules/,
                    loader: 'json'
                }],
                loaders: [{
                    test: /\.js$/,
                    exclude: /\/node_modules\//,
                    loader: 'babel-loader',
                    query: {
                        presets: ["es2015", "react"]
                    }
                }, {
                    test: /\.json$/,
                    loader: "json-loader"
                }]
            },
            externals: {
                'jsdom': 'window',
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'text-encoding': 'window'
            }
        },
        isparta: {
            embedSource: true,
            noAutoWrap: true
        },
        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-coverage',
            'karma-sourcemap-loader',
            'karma-phantomjs-launcher'
        ],
    });
};
