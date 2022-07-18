var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  mode: 'development',

  devtool: "eval-source-map",

  context: __dirname,

  entry: {
      main:    './assets/js/main.js', 
      worker:  './assets/js/worker.js',
      main_integrated:    './assets/js/main_integrated.js', 
      worker_integrated:  './assets/js/worker_integrated.js',
      main_cluster:    './assets/js/main_cluster.js', 
      worker_cluster:  './assets/js/worker_cluster.js',
      main_detected:    './assets/js/main_detected.js', 
      worker_detected:  './assets/js/worker_detected.js',
  },

  output: {
      path: path.resolve('./assets/bundles/'), // 出力
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
}
