const express = require('express');
const urlJoin = require('url-join');

const app = express();
const hostname = 'localhost';
const port = 9000;
const baseURL = '/';
const fullURL = path => urlJoin(baseURL, path);

app.use(baseURL, express.static('public'));
app.use(fullURL('/resources'), express.static('static'));

app.get(fullURL('/hello'), (req, res) => {
  res.statusCode = 200;
  res.end('hello world!');
});

app.listen(port, () => {
  console.log(`Server running at ${hostname}:${port}`)
});
