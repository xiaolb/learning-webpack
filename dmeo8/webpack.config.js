var HtmlWebpackPlugin=require('html-webpack-plugin');
var OpenBrowserPlugin=require('open-browser-webpack-plugin');

module.exports={
	entry:'./main.js',
	output:{
		filename:'bundle.js'
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'Webpack-demos',//为生成的html文件取个名字
			filename:'src/index.html'//为生成的html文件设置放置的路径
		}),

		new OpenBrowserPlugin({
			url:'http://localhost:8080/src'//设置打开的服务器的路径
		})

	]
}