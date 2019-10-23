  
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('./src/db/mongDb');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const inputRouter = require('./src/routes/inputData');

app.use(express.json());
app.use(inputRouter);
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
//   });
  app.all(function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin","*"); // restrict it to the required domain
    res.header('Access-Control-Request-Method', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,application/octet-stream');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });
app.listen(port, () => {
    console.log('Server is running on Post 3000');
});