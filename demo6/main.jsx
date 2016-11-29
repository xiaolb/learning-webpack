var React=require('react');
var ReactDOM=require('react-dom');
var style=require('./app.css');


ReactDOM.render(
	<div>
		<h1 className={style.h1}>helloWOrld</h1>
		<h2 className="h2">hello webpack</h2>
		<h3 className="h3">nihao</h3>
	</div>,
	document.getElementById('container')
);