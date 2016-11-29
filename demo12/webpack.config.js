var webpack=require('webpack');
 var commonsChunkPlugin=webpack.optimize.CommonsChunkPlugin;

 module.exports={
 	entry:{
 		bundle1:'./main1.jsx',
 		bundle2:'./main2.jsx'
 	},
 	output:{
 		filename:'[name].js'
 	},
 	module:{
 		loaders:[
 			{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
 		]
 	},
 	plugins:[
 		new commonsChunkPlugin('init.js')
 	]
 }

