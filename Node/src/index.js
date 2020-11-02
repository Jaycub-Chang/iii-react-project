require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const db = require(__dirname + '/db_connect');
const cors = require('cors');


app.use(cors());
//set top middleware
//which to use is decided by header content-type
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/podcaster_dashboard', require(__dirname + '/routes/podcaster_dashboard'));

app.get('/', function (req, res) {
    // res.send('Hello World!');
    res.send('已開啟express')
});


app.get('/try-db', (req, res) => {
    db.query('SELECT * FROM products LIMIT 5')
        .then(([results]) => {
            res.json(results);
        })
});


// app.get('/add_channel_rating', async (req, res) => {
//     for (let i = 0; i < 110; i++) {
//         let podcaster_id = (i + 1);
//         for (let k = 0; k < 10; k++) {
//             let reviewer_id = (k + 1);
//             let randomScore = Math.floor(Math.random() * (5 - 1 + 1) + 1);
//             const sql = "INSERT INTO `channel_rating`(`reviewer_id`, `podcaster_id`, `score`) VALUES (?,?,?)";
//             const [results] = await db.query(sql, [reviewer_id, podcaster_id, randomScore]);
//         };
//     };
//     res.send('完成');
// });




app.use(express.static(__dirname + '/../public/'));

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404-找不到網頁');
});

app.listen(5566, function () {
    console.log('啟動 server 偵聽埠號 5566');
});

