const {
  container: { ModuleFederationPlugin },
  HtmlRspackPlugin,
} = require('@rspack/core');

const { withZephyr } = require('zephyr-webpack-plugin');

module.exports = /*withZephyr()*/({
  entry: './src/index.js',

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.mjs'],
  },
  output: {
    publicPath: 'auto',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'ecmascript',
                jsx: true,
              },
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'app_03',
      filename: 'remoteEntry.js',
      remotes: {
        // app_01: 'app_01@http://localhost:3001/remoteEntry.js',
        app_01: 'app_01@https://valorkin_2697-app_01-zephyr-comprehensive-demo-react1-3c2dd6-ze.valorkin.dev/remoteEntry.js',
      },
      exposes: {
        './Button': './src/Button',
      },
      shared: {
        'react-dom': {
          singleton: true,
        },
        react: {
          singleton: true,
        },
      },
    }),
    new HtmlRspackPlugin({
      template: './src/index.html',
    }),
  ],
});
