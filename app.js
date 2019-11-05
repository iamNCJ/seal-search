const mysql   = require('mysql');
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

var connection = mysql.createConnection({ 
 host   : '123.56.17.42', 
 user   : 'small_seal_visitor', 
 password : 'THE_password123', 
 database : 'small_seal'
}); 
  
connection.connect();
var sql = 'SELECT * FROM small_seal_content';
var data = '';
connection.query(sql, function(err, rows, fields) { 
  if (err) {
    console.log(err);
    return;
  };
  var dataString = JSON.stringify(rows);
  data = JSON.parse(dataString);
  // console.log('The solution is: ', data); 
});
app.get(fullURL('/query'), (req, res) => {
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
  // console.log('query done');
  res.end('query');
});

connection.end(); 

app.listen(port, () => {
  console.log(`Server running at ${hostname}:${port}`)
});
