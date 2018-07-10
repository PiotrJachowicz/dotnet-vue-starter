const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../'),
        ],
        query: {
          presets: ['es2015'],
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  node: {
    fs: 'empty',
  },
};
