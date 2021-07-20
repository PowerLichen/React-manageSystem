const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

app.get('/api/customers', (req, res) => {
    db.query(
        'SELECT * FROM CUSTOMER',
        (err, rows, fields) => {
            if (err) {
                throw err;
            } else {
                res.send(rows);
            }
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`))
