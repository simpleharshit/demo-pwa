var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: __dirname,
    stats: {
        colors: true,
        reasons: true
    },
    entry: {
        polyfills: path.join(__dirname, 'src', 'polyfills.ts'),
        vendor: path.join(__dirname, 'src', 'vendor.ts'),
        main: path.join(__dirname, 'src', 'main.ts'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'bower_components'),
            path.resolve(__dirname, 'custom_components')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ['source-map-loader'],
                exclude: [
                    path.join(process.cwd(), 'node_modules')
                ]
            },
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.html$/,
                use: ['raw-loader']
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.json$/,
                use: ['json-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].bundle.map',
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [        
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        ),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        new CopyWebpackPlugin([
            { from: 'assets', to: 'assets' },
            { from: 'bower_components', to: 'bower_components' },
            { from: 'custom_components', to: 'custom_components' }
        ])
    ]
}
