const path = require('path');
var DeclarationBundlerPlugin = require('types-webpack-bundler');

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
            moduleName: 'mx',
            out: 'formBase.d.ts',
        })
    ]

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