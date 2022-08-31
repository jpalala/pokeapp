//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: ['react-hot-loader/patch','./src/index.js'],
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
   },
   devServer: {

      hot: true,
      port: 3001

   },
   module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [{
                  loader:'react-hot-loader/webpack'
                }, 
                {
                  loader: 'babel-loader'
                }],
        },
        {
          test: /\.css$/,
          use: [
            { 
              loader: 'style-loader'
            },
            {
              loader:  'css-loader' 
            }]
        },
        {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/i, 
          loader: 'url-loader',
          options: {
            name: '/images/[name].[ext]'
          }
        }
      ]
   },
  plugins: [
    new HtmlWebpackPlugin(
    { inject: true,
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html"
  })] 
}
