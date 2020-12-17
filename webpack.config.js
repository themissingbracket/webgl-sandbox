const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => {
    return {
        entry:'./src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        resolve: {
          extensions: [ '.tsx', '.ts', '.js' ],
        },
        module: {
            rules: [
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            ],
          },
        devServer: {
            contentBase: './dist'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template:'./index.html'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'public',
                        to:'public'
                    }
                ]
            })
        ]
    }
}
