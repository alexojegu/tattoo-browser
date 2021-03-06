const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  entry: './src/index.tsx',
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ['babel-loader', 'ts-loader'] },
      { test: /\.svg$/, use: ['@svgr/webpack'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'web/index.html' }),
    new EnvironmentPlugin(['GRAPHQL_URL', 'IMAGE_URL', 'MAP_URL', 'MAP_KEY']),
  ],
  optimization: { minimize: process.env.NODE_ENV === 'production' },
  output: {
    path: join(__dirname, 'dist'),
    filename: 'scripts/[contenthash].js',
    publicPath: '/',
  },
  devServer: {
    stats: 'errors-warnings',
    contentBase: 'web',
    compress: true,
    historyApiFallback: true,
  },
};
