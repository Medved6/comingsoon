		

	/**
	*
	*	WEBPACK.CONFIG|JS
	* 	-------------------
	*	DESC | description
	*	LOCATION | path
	*
	*/

	

	import webpack from 'webpack';
	import path from 'path';
	import HtmlWebpackPlugin from 'html-webpack-plugin';



	let serverConfig = {

	  contentBase: './',
	  port: 8080,
	  host: '0.0.0.0',
	  progress: true,
	  historyApiFallback: {
      index: '/index.html'
    }

	};





	export default {



		entry : {
			app : './src/scripts/app/App.js'
		},



		output : {
			path : path.join(__dirname, './dist/scripts'),
			filename : 'bundle.js'
		},



		module: {
	    loaders: [
	      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
	      { test: /\.json$/, loader: 'json' },
	    ],
	  },

	  resolve: {
	    extensions: ['', '.js', '.css', '.json']
	  },


	  devServer: serverConfig,



	  plugins: [
	    new webpack.DefinePlugin({
	      'process.env': { 'NODE_ENV': JSON.stringify('production') },
	    }),
	    new HtmlWebpackPlugin({
		    inject: 'body',
		    template : './index.html'
		  })
	  ],


	  devtool: 'inline-source-map',


	}









