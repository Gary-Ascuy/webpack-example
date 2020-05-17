const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    library: 'gary',
    path: path.resolve(__dirname, 'build'),
    publicPath: "/assets/",
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devServer: {
    contentBase: path.join(__dirname, '.'),
    port: 9000,
    watchOptions: {
      ignored: /node_modules/
    }
  }
}
