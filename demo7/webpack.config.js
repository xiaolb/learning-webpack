var webpack=require('webpack');
// UglifyJsPlugin将js压缩的一个插件
var uglifyJsPlugin=webpack.optimize.UglifyJsPlugin;

module.exports={
	entry:'./main.js',
	output:{
		filename:'bundle.js'
	},
	plugins:[
		new uglifyJsPlugin({
			compress:{
				warnings:false
			}
		})
	]
}
