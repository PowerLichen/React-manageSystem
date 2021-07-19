const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'http://placeimg.com/64/64/1',
            'name': "김팝송",
            'birthday': '990101',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'http://placeimg.com/64/64/2',
            'name': "김밥",
            'birthday': '910405',
            'gender': '남자',
            'job': '백수'
        },
        {
            'id': 3,
            'image': 'http://placeimg.com/64/64/3',
            'name': "이백",
            'birthday': '011205',
            'gender': '여자',
            'job': '교사'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`))
