module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], // preset-react for jsx preset-env for to ES5 conversion
                        plugins: ['@babel/plugin-transform-runtime'] // enable async await etc
                    }
                }
            }
        ],
    }
}