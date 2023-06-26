const path = require('path');

module.exports = {
  entry: './src/server.ts',
  target: 'node',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'swc-loader',
      },
    ],
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
  },

  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
