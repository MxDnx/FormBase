const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');

class GenerateDeclarativeFilePlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tapAsync('GenerateDeclarativeFilePlugin', (compilation, callback) => {
            // Chemin vers votre fichier JavaScript principal
            const jsFilePath = path.resolve(__dirname, 'public', 'formBase.js');

            // Exécute le compilateur TypeScript avec l'option --declaration
            childProcess.exec(`tsc --declaration ${jsFilePath}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(stdout);
                }
                callback();
            });
        });
    }
}

module.exports = {
    devtool: 'eval-source-map',
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
    mode: 'development',
    plugins: [
        new GenerateDeclarativeFilePlugin()
    ]
};

