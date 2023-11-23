const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.get('/api/cake/:id', (req, res, next) => {
  db.pool.query(`SELECT * FROM cake WHERE cakeId = ${req.params.id};`, (err, [results], fields) => {
    if(!results) return res.status(404).send('not found');
    return res.json(results);
  });
});

app.post('/api/cake', (req, res, next) => {
  const { color, shape, topping, sender, receiver, message } = req.body.data;


  db.pool.query(`INSERT INTO cake (color, shape, topping, sender, receiver, message) VALUES ('${color}', '${shape}', '${topping}', '${sender}', '${receiver}', '${message}');`, (err, results, fields) => {
    if (err) return res.status(500).send(err);
    else return res.json({ success: true, value: results.insertId });
  });
});


app.listen(5000, () => {
  console.log('this server listening on 5000');
});
