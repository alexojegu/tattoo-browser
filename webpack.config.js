const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  entry: './src/index.tsx',
  resolve: { extensions: ['.js', '.ts', '.tsx'] },
  module: {
    rules: [{ test: /\.tsx?$/, use: ['babel-loader', 'ts-loader'] }],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'web/index.html', scriptLoading: 'defer' })],
  optimization: { minimize: process.env.NODE_ENV === 'production' },
  output: {
    path: join(__dirname, 'dist'),
    filename: 'scripts/[contenthash].js',
    chunkFilename: 'scripts/[contenthash].js',
  },
  devServer: {
    stats: 'errors-warnings',
    host: '0.0.0.0',
    port: 8000,
    contentBase: 'dist',
    compress: true,
    historyApiFallback: true,
  },
};
