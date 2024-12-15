const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/main.ts', // Make sure this points to the correct entry file in your host app
  output: {
    publicPath: 'auto', // Ensures Webpack dynamically resolves paths
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'], // Ensure TypeScript extensions are handled
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  // output: {
  //   publicPath: 'http://localhost:4200/',
  //   uniqueName: 'hostApp'
  // },
  // optimization: {
  //   runtimeChunk: false
  // },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        remoteComponents: 'remoteComponents@https://remote-components.pages.dev/remoteEntry.js'
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true }
      }
    })
  ]
};


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { ModuleFederationPlugin } = require('webpack').container;
//
// module.exports = {
//   entry: './src/main.ts',  // Ensure this is the correct entry file
//   output: {
//     publicPath: 'auto',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   resolve: {
//     extensions: ['.ts', '.js', '.json'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'hostApp',
//       remotes: {
//         remoteComponents: 'remoteComponents@http://localhost:3000/remoteEntry.js',
//       },
//       shared: ['@angular/core', '@angular/common', '@angular/router'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/index.html',  // This should be your custom index.html template
//     }),
//   ],
// };
