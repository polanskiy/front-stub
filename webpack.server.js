const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/server/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'buildserver'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.png', '.svg', '.jpg', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      server: path.resolve(__dirname, 'src/server/'),
    },
  },
  externals: nodeExternals(),
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: '16.13.1',
                },
              },
            ],
            '@babel/preset-typescript',
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
};
