const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

const { join } = require('path');

const paths = {
    srcAssetsPath: join(__dirname, 'Views'),
    clientEntry: WebpackWatchedGlobEntries.getEntries([join(__dirname, "./Views/**/*.jsx")]), /// the wildecard routes to jsx file (thanks to HtmlWachedGlobEntries plugin)
    bundleOutputPath: join(__dirname, 'wwwroot/js'),
    clientOutput: join(__dirname, 'dist/client'),
};

const isProd = process.env.NODE_ENV === 'production' ? true : false;

/** @type {import('webpack').Configuration config} */
const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: paths.clientEntry,
    output: {
        filename: '[name].js',
        path: paths.bundleOutputPath,
    },
    devServer: {
        static: { directory: paths.clientOutput },
        compress: false,
        hot: false,
        liveReload: true,
        historyApiFallback: true,
        port: 8080,
        watchFiles: [join(paths.srcAssetsPath, '/**')],
        client: {
            logging: 'info',
            progress: true,
        },
        proxy: {
            '/api': 'http://localhost:8088/api',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        //new HtmlWebpackPlugin({
        //    template: paths.templateSrcPath,
        //    xhtml: true,
        //    inject: 'body',
        //}),
        new WebpackWatchedGlobEntries(),
    ],
};

module.exports = config;
