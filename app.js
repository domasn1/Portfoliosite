var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
 res.sendfile('./dist/index.html');
});

app.get('/', function (req, res) {
 res.sendfile('./dist/css/style.css');
});

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
