const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
    new HTMLWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        // chunks: ['main']
    }),
    new HTMLWebpackPlugin({
        filename: 'aboutus.html',
        template: 'src/aboutus.html',
    //   chunks: ['main']
    }),
    new HTMLWebpackPlugin({
        filename: 'contacts.html',
        template: 'src/contacts.html',
    //   chunks: ['main']
    }),
    new HTMLWebpackPlugin({
        filename: 'privacypolicy.html',
        template: 'src/privacypolicy.html',
    //   chunks: ['main']
    }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            { test: /\.(js)$/, use: 'babel-loader' },
            {
          test: /\.html$/,
          use: [
            'html-loader',
            {
              loader: 'posthtml-loader',
              options: {
                plugins: [
                  require('posthtml-include')({ root: 'src' })
                ]
              }
            }
          ]
        }
        ]
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}