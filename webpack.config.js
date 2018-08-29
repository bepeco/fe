const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Webpack = require('webpack')

const distPath = 'dist'

//TODO: library 내보내기용 webpack을 분리해야 할 듯

module.exports = {
  entry: {
    fe: ['./src/index.js'],
    example: ['babel-polyfill', './src/Examples/index.js']
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, distPath)
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, distPath),
    port: 9000,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin([distPath]),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new Webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  }
}
