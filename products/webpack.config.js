const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8081,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
      },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap'
            },
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};