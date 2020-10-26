require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const db = require(__dirname + '/../db_connect');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('podcaster_dashboard');
});


// 播客個人頻道資料
router.get('/channel_info/api/:podcaster_id?', async (req, res) => {

    const sql = "SELECT * FROM `podcast_channel_info` WHERE podcaster_id=?";
    const [results] = await db.query(sql, [req.params.podcaster_id]);    //要以陣列送進去

    res.send(results);
});


// 播客頻道所有單集
router.get('/channel_audio/api/:podcaster_id?', async (req, res) => {

    const sql = "SELECT * FROM `podcast_audio` WHERE podcaster_id=?";
    const [results] = await db.query(sql, [req.params.podcaster_id]);    //要以陣列送進去

    res.send(results);
});





module.exports = router;
