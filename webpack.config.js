const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: './dev/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'prod'),
  },
  plugins: [
    new NodemonPlugin(),
  ],
  target: "node",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};