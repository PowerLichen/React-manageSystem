const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
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


const multer = require('multer');
const upload = multer({ dest: './upload' });
app.use('/image', express.static('./upload'));
app.use(cors({origin:'http://localhost:3000/'}));

app.get('/api/customers', (req, res) => {
    db.query(
        'SELECT * FROM CUSTOMER WHERE isDeleted = 0',
        (err, rows, fields) => {
            if (err) {
                throw err;
            } else {
                res.send(rows);
            }
        }
    );
});


app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null,?,?,?,?,?, now(), 0)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let parms = [image, name, birthday, gender, job];
    db.query(sql,parms,
        (err, rows,fields) => {
            res.send(rows);
        })
});

app.delete('/api/customers/:id', (req,res) => {
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    db.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
