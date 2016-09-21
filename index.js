var express = require("express");
var app = express();
var port = 3700;

app.set('views', __dirname + '/tpl');
app.set('view engine', "pug");
app.engine('pug', require('pug').__express);
app.get("/", function(req, res) {
  res.render("page");
});

app.use(express.static(__dirname + '/public'));

var io = require('socket.io').listen(app.listen(port));

console.log("Listening on port " + port);
