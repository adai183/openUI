var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/examples/chat_example/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  sassLoader: {
    includePaths: [
      './node_modules',
    ]
  },
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loader: 'remove-flow-types',
        include: path.join(__dirname, 'src')
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        exclude: [/\.module\.css$/],
        loader: 'style-loader!css-loader!'
      },
      {
        test: /\.scss$/,
        exclude: [/\.inline\.scss$/, /\.module\.scss$/],
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.module\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  }
};
