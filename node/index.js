const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlInsert = `INSERT INTO people(name) values('Jorge')`
connection.query(sqlInsert)
const sqlSelect = `select name from people`;
connection.query(sqlSelect, (err, result, fields) => {
  if (err) {
    throw err;
  }
  resultPeople = result.map(row => '<li>' + row.name + '</li>')
});
connection.end()

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle!</h1>' + '<h2>Nomes:</h2><ul>' + resultPeople + '</ul>')
})

app.listen(port, () => {
  console.log('Rodando na porta' + port);
})