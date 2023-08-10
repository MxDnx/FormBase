const path = require('path');
//var DeclarationBundlerPlugin = require('types-webpack-bundler');

module.exports = (env) => {
  return {
    entry: env.entry,
    devtool: 'eval-source-map',

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',

        },

      ],
    },
    resolve: {
      extensions: ['.ts'],

    },
    output: {
      publicPath: 'auto',
      filename: env.output,
      path: path.resolve(__dirname),
      libraryTarget: 'window',
      library: 'mxDnx',

    },
    mode: 'development',
  }
}
  ;
/*
module.exports = {
    module: {
      rules: [
        {
          test: /\.d\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                compilerOptions: {
                  declaration: true,
                },
              },
            },
          ],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.d.ts',
    },
  };*/