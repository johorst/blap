var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

app.use(express.static('.'));

app.post('/setzen', function (req, res) {
    console.log(req.body);
       res.send( "data" );
})

var server = app.listen(process.env.PORT, function () {

  var host = process.env.IP; //server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})