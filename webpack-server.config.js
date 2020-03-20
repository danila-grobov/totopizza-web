const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './app.js'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'prod'),
  },
  plugins: [
    new NodemonPlugin()
  ],
  node: {
    __dirname: false,
  },
  target: "node",
  devtool: "source-map"
};