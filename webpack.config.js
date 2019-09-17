const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './main.js',
    output:  {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    watch: true,
    watchOptions: {  
        ignored: /node_modules/  
    }, 
    module:{
        // rules:[
        //     {
        //         test: /\.css$/,
        //         loader: ExtractTextPlugin.extract({
        //             fallback: 'style-loader', 
        //             use: ['css-loader']
        //         })
        //     }, 
        // ]
        rules: [
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
          ],
    },
    plugins: [
        // new ExtractTextPlugin({filename:`[name].css`} ),
        new MiniCssExtractPlugin({
            filename: `[name]_[hash].css`,
            chunkFilename: `[id].css`,
          }),
        new HtmlWebpackPlugin({
            inject:true,
            template: './index.html'
        }),
        new CleanWebpackPlugin()//清理构建文件夹
      ],

}