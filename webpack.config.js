const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
    mode: isDev ? 'development' : 'production',
	entry: './src/index.js',
	output: {
		filename: 'js/bundle.[hash:8].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/dist/'
	},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
				include: /src/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 8192,
                        name: 'resource/images/[name].[ext]',
                        publicPath: '../'
                      }
                    }
                ]
            },
			{
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 8192,
                        name: 'resource/fonts/[name].[ext]',
                        publicPath: '../'
                      }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader"]

                })
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader","postcss-loader"]

                })
            }
        ]
    },
	resolve : {
        alias : {
            node_modules: __dirname + '/node_modules'
        },
        extensions: ['.js','.jsx','scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "React App",
            favicon: "./favicon.ico",
			minify: {
				collapseWhitespace: true
            }
			
        }),
        new ExtractTextPlugin({
            filename: 'css/bundle.[hash:8].css',
            disable: isDev
        }),
		new webpack.HotModuleReplacementPlugin()

    ],
    devServer: {
        hot:true,
        compress: true,
        port: 8080,
        historyApiFallback: {
            index: "/dist/index.html"
        }
    }
}