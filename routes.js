var proxy = require('./routes/proxy');
var getlist = require('./routes/getlist');

var routes = (app) => {
	//首页
	app.get('/', (req, res)=>{
		res.render('index', { title: 'Mockapi'});
	});
	//请求转发
  app.use('/Api/*', proxy);
  app.get('/Api/getlist', getlist);
}
module.exports = routes;
