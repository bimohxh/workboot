var webpack = require("webpack")


module.exports = {
  entry: {
    controller: "./dist/js/index.js"
  },
  output: {
    path: __dirname + "/dist/js",
    filename: "[name].js"
  },
  resolve: {
    alias: {
      'swiper.jquery.min' : 'libs/swiper.jquery.min.js', 
    }
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
  ]
}
