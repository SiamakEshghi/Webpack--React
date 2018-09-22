const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});
module.exports = { 
        entry: "./index.js",
        output: {
            filename: '[name].[hash].bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        context: path.resolve(__dirname, 'src'),
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new CleanWebpackPlugin(['public']),
            extractPlugin
        ],
        module: {
            rules: [
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './assets/'
                            }
                        }
                    ]
            
                },
                {
                    test: /\.scss$/,
                    use: extractPlugin.extract({
                        use: ["css-loader", "sass-loader", "postcss-loader"],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            }
        }
}