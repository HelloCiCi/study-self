/**
 * Created by GYX on 17/11/14.
 */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Uglify = require('Uglifyjs-webpack-plugin');
const glob = require('glob');
const PurifyCssPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require("./webpack-config/entry.webpack.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry:entry,
    output:{
       path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    //use:"css-loader"
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                    },"postcss-loader"]
                })
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:3000000,
                        outputPath:"img/"
                    }
                }]
            },
            {
                test:/\.scss$/,
                //use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
            },
            {
                test:/\.js$/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["env"]
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template: "./src/index.html"
        }),
        new ExtractTextPlugin('css/index.css'),
        //new Uglify
        new PurifyCssPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin("这是一个打包注释"),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:["jquery","vue"],
            fileName:"assests/js/[name].js",
            minChunk:2
        }),
        new CopyWebpackPlugin([{
            from: __dirname+"/src/Public",
            to:"./public"
        }])

    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true
    },
    watchOptions:{
        poll:1000,
        agreegateTimeout: 500,
        ignored:/node_modules/
    }

}
