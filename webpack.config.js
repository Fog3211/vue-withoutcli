//webpack.config.js
var webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: __dirname + '/src/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				},{
					loader: 'css-loader'
				}]

			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
			  },
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.js',
			'@': path.resolve(__dirname, "src")
		}
	},
	devServer: {
		contentBase: './dist',
		stats: {
			colors: true
		},
		historyApiFallback: true,
		inline: true
	}
}