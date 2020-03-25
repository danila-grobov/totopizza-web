const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './dev/index.jsx'
  },
  output: {
    filename: 'assets/index.js',
    path: path.resolve(__dirname, 'prod'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dev/index.html"
    })
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, "dev")
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};