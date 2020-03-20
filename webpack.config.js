const path = require('path');

module.exports = {
  entry: './dev/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, ''),
  },
};