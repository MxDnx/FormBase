const path = require('path');
var DeclarationBundlerPlugin = require('types-webpack-bundler');

module.exports = {
  devtool: 'eval-source-map',
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
    extensions: ['.ts', '.js', '.webpack.js', '.web.js', '.js'],
  },
  output: {
    publicPath: 'auto',
    filename: 'account.js',
    path: path.resolve(__dirname, 'public'),
    libraryTarget: 'window',
    library: 'mx',

  },
  mode: 'development',

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