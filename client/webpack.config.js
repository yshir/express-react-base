const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: '3002',
    hot: true,
    open: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3001',
        secure: false,
        logLevel: 'debug'
      }
    }
  }
}