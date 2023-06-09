const path = require('path')
const HtmlWebpacPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const { dependencies } = require('../../package.json')

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
    new ModuleFederationPlugin({
      name: 'Host',
      remotes: {
        MFE1: 'MFE1@http://localhost:3001/remoteEntry.js',
        TICTACTOE: 'TICTACTOE@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
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
