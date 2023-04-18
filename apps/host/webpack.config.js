const path = require('path')
const HtmlWebpacPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpacPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      inject: 'body',
    }),
  ],
  devServer: {
    port: process.env.PORT || 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
