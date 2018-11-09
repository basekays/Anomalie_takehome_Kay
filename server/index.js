if (process.env.NODE_ENV == 'production') {
  require('newrelic');
}

var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000

app.use(express.static(__dirname + '/../client/dist'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/src/index.html'))
})

app.listen(port, function() {
  console.log(`Anomalie listening on port ${port}`);
});
