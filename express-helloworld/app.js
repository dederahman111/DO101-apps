var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function(req, res) {
  res.send('Hello Maarss!\n');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});

