var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
 
  module: {
      loaders: [
          {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
          },
      ]
  },

};