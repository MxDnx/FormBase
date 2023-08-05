const path = require('path');

module.exports = {
    entry: './src/formBase.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        publicPath: 'auto',
        filename: 'formBase.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'development'
};