//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: './src/index.js',
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
            loader: 'babel-loader',
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
