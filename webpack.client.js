const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[fullhash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.png',
      '.svg',
      '.jpg',
      '.ts',
      '.tsx',
      '.css',
    ],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      config$: path.resolve(__dirname, 'config/index.js'),
    },
  },
  optimization: { minimizer: ['...', new CssMinimizerPlugin()] },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: 'only',
    allowedHosts: 'all',
    client: {
      logging: 'none',
    },
  },
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      // filename: '[name].[contenthash].css',
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'font',
      include: 'allAssets',
      fileWhitelist: [/\.(woff2?|eot|ttf|otf)(\?.*)?$/i],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/[name][ext]',
        },
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
      {
        test: /\.csv$/,
        use: ['csv-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react',
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
};
