const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.get('/api/values', (req, res, next) => {
  db.pool.query('SELECT * FROM lists;', (err, results, fields) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});

app.post('/api/value', (req, res, next) => {
  db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}");`, (err, results, fields) => {
    if (err) return res.status(500).send(err);
    else return res.json({ success: true, value: req.body.value });
  });
});

app.get('/api/cake/:id', (req, res, next) => {
  db.pool.query(`SELECT * FROM cake WHERE id = ${req.params.id};`, (err, results, fields) => {
    if(!results) return res.status(404).send('not found');
    return res.json(results);
  });
});

app.post('/api/cake', (req, res, next) => {
  const { color, shape, topping, sender, receiver, message } = req.body;

  db.pool.query(`INSERT INTO cake (color, shape, topping, sender, receiver, message) VALUES(?, ?, ?, ?, ?, ?);`, [color, shape, topping, sender, receiver, message], (err, results, fields) => {
    if (err) return res.status(500).send(err);
    else return res.json({ success: true, value: req.body.value });
  });
});

app.get('/api/cake', (req, res, next) => {
  db.pool.query(`SELECT * FROM cake;`, (err, results, fields) => {
    return res.json({ success: true, value: req.body.value });
  });
});


app.listen(5000, () => {
  console.log('this server listening on 5000');
});
