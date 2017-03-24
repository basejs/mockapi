var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');

app.use(express.static('static'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.json());

routes(app);

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});