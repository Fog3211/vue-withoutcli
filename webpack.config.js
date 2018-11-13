const path = require('path')
const webpack = require('webpack')
const VueLoader = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpaclPlugin = require("clean-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
            },
        ]
    },
    plugins: [
        new cleanWebpaclPlugin(path.join(__dirname, 'dist')),
        new VueLoader(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            title: "vue-withoutcli",
            hash: true,
            comments: false,
            minify: {
                removeAttributeQuotes: true,
            },
            favicon: path.resolve('./src/public/favicon.ico')
        })
    ],
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, "src")
        }
    },
    devServer: {
        contentBase: 'dist',
        stats: {
            colors: true
        },
        historyApiFallback: true,
        inline: true,
        hot: true,
        compress: true,
        open: true
    }
}