const path = require('path');
const glob = require('glob');
var DeclarationBundlerPlugin = require('types-webpack-bundler');

module.exports = {
  devtool: 'eval-source-map',
  entry: glob.sync('./src/**/*.ts'),
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
    filename: 'formBase.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  plugins: [
    new DeclarationBundlerPlugin({
      moduleName: 'mxDnx',
      out: 'formBase.d.ts',
    })
  ]

}
