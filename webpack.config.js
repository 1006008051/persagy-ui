var path = require('path')
var webpack = require('webpack')
var utils = require('./untils')
const MarkdownItContainer = require('markdown-it-container')

const vueMarkdown = {
	preprocess: (MarkdownIt, source) => {
		MarkdownIt.renderer.rules.table_open = function() {
			return '<table class="table">'
		}
		MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
		return source
	},
	use: [
		[MarkdownItContainer, 'demo', {
			// 用于校验包含demo的代码块
			validate: params => params.trim().match(/^demo\s*(.*)$/),
			render: function(tokens, idx) {

				var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

				if (tokens[idx].nesting === 1) {
					var desc = tokens[idx + 2].content;
					// 编译成html
					const html = utils.convertHtml(utils.striptags(tokens[idx + 1].content, 'script'))
					// 移除描述，防止被添加到代码块
					tokens[idx + 2].children = [];

					return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
				}
				return '</div></demo-block>\n';
			}
		}]
	]
}

module.exports = {
	entry: './examples/main.js',
	  output: {
	  path: path.resolve(__dirname, './dist'),
	  publicPath: '/dist/',
	  filename: 'build.js'
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.(woff|svg|eot|ttf)$/,
				loader: 'url-loader'
			},
			{
				test: /\.md$/,
				loader: 'vue-markdown-loader',
				options: vueMarkdown
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	devServer: {
		historyApiFallback: false,
		noInfo: true,
		overlay: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
