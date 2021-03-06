var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config()
var isProd = (process.env.NODE_ENV === 'production')
const extractCSS = new ExtractTextPlugin("[name]-[hash].css")

function getPlugins() {
  var plugins = []
  plugins = [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      filename: path.resolve('./src/bundles/index.html')
    }),
    new HtmlWebpackRootPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('prod')
    }),
    new LiveReloadPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
  if(isProd){
    plugins.push(new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: false
      }
    }))
  }
  return plugins
}

module.exports = {
    context: __dirname,
    entry: ["babel-polyfill", "./src/index"],
    output: {
      path: path.resolve('./src/bundles/'),
      filename: "[name]-[hash].js"
    },
    plugins: getPlugins(),
    module : {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { presets: [ "@babel/preset-env", '@babel/preset-react']}
          }]
        },
        {
           test: /\.(gif|png|jpg)$/,
           use: [ 'file-loader' ]
        },
        {
           test: /\.(png|jpg)$/,
           use: [
            {
              loader: "url-loader",
              options: {
                mimetype: 'image/png'
              }
            }
          ],
          include: path.join(__dirname, 'src/images')
        },
        /*
        your other rules for JavaScript transpiling go in here
        */
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: path.join(__dirname, "src/bundles/")
              },
            },
            'css-loader',
          ],
        }
      ]

    },
    devServer: {
        contentBase: path.join(__dirname, "src/bundles/"),
        publicPath: '/',
        compress: true,
        port: 9000,
        historyApiFallback: true
    }
}
