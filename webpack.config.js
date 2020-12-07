const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  devServer: {
    inline: true,
    port: 3000,
  },
  entry: {
    app: {
      import: './src/app.js',
      filename: 'app.js',
    },
    funky: {
      import: './src/funky.js',
      filename: 'vendor/funky.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/public'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/ramda/dist/ramda.min.js',
          to: 'vendor/ramda.js',
        },
        {
          from: 'node_modules/ramda-adjunct/dist/RA.web.standalone.min.js',
          to: 'vendor/ramda-adjunct.js',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      chunks: [ 'app' ],
      favicon: './public/favicon.ico',
      minify: false,
      template: './src/index.html',
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          entry: [
            'dist/bundle.css',
            'dist/bundle.js',
          ],
          global: 'ramdaRepl',
          module: 'ramda-repl',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}
