let webpack = require('webpack');
let path = require('path');

//Webpack Config
module.exports = {
	entry: {
		/**
		 * Move vendor code to seperate bundle so they dont get reloaded each time we modify our application code.
		 * 1. Add these to common chuncks plugin below
		 * 2. Replace output->filename with dynamically specified 'app' name by using the [name] keyword
		 * @type {Array}
		 */
		app: './resources/assets/js/app.js',
		vendor: ['vue', 'axios']
	},
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: '[name].js',
		publicPath: './public'
	},

	module: {
	    rules: [
	    	{
		        test: /\.js$/,
		        exclude: /node_modules/,
		        loader: 'babel-loader'
		    },
	    ]
	  },

	resolve: {
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
	    }
  	},
  	plugins: [
  		new webpack.optimize.CommonsChunkPlugin({
  			names: ['vendor']
  		})
  	]
};
if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		//Disable all Vue warnings in log
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		//Minify File
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		// new webpack.LoaderOptionsPlugin({
		//   	minimize: true
		// })
	])
}