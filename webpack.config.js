const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sveltePreprocess = require('svelte-preprocess')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

const outputDir = path.join(__dirname, 'dist')

module.exports = {
  mode,
  devtool: prod ? false : 'source-map',
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    path: outputDir,
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[id].[contenthash].js',
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: sveltePreprocess({
              postcss: true,
            }),
          },
        },
      },
      {
        test: /\.(css|pcss)$/,
        use: [
          // MiniCssExtractPlugin doesn't support HMR.
          // For developing, use 'style-loader' instead.
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: outputDir,
    compress: true,
    port: 1234,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: './src/static/favicon' }]),
    new HtmlWebpackPlugin({
      minify: prod,
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[id].[contenthash].css',
    }),
  ],
}
