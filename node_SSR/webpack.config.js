import webpack from 'webpack';

module.exports = {
  entry: [
    './src/client/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
    publicPath: '/static/',
  },
  module: {
    preLoaders: [{
      test: /\.jsx$|\.js$/,
      loader: 'eslint-loader',
      exclude: /bundle\.js/,
      include: `${__dirname}/src`,
    }],
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    loaders: [{
      test: /\.jsx$|\.js$/,
      exclude: '/node_modules/',
      loader: 'babel-loader',
    }],
  },
};