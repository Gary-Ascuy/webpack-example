const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: {
    "bundle": [
      'webpack-hot-middleware/client',
      './src/app.js'
    ]
  }
  ,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '.'),
    port: 9000,
    inline: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
