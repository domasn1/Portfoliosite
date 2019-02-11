var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/bootstrap-4.1.0-dist'));

app.get('/', function (req, res) {
 res.sendfile('./bootstrap-4.1.0-dist/index.html');
});

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
