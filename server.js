const express = require('express');
const app = express();
const compression = require('compression');
const helmet = require('helmet');

app.use(compression());
app.use(helmet());

app.listen(3000, function() {
  console.log("listening on 3000");
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('./'))
