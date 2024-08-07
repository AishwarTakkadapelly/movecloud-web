const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');

module.exports = (env) => {
  // Get the root path
  const currentPath = path.join(__dirname);

  // Create the fallback path (the .env file)
  const basePath = `${currentPath}/.env`;

  // Concatenate the environment name to the base path to specify the correct .env file
  const envPath = `${basePath}.${env.ENVIRONMENT}`;

  // Check if the file exists, if not, fall back to the .env file
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  // Create an object of environment variables for DefinePlugin
  const envKeys = fileEnv ? Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {}) : {};

  console.log('Environment Variables:', envKeys); // Debugging log

  return {
    mode: env.ENVIRONMENT === 'development' ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9001
    }
  };
};
