import express from 'express';
import db from './db';

const app = express();

app.use(express.json());

app.get('/api/values', (req, res, next) => {
  db.query('SELECT *FROM lists;', (err, results, fields) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});

app.post('/api/value', (req, res, next) => {
  db.query(`INSERT INTO lists (value) VALUES("${req.body.value}");`, (err, results, fields) => {
    if (err) return res.status(500).send(err);
    else return res.json({ success: true, value: req.body.value });
  });
});

app.listen(5000, () => {
  console.log('this server listening on 5000');
});
