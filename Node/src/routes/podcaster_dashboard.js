require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');

const multer = require('multer');
const getPostData = multer();
const uploadAudio = require('./../jay_modules/upload_audio_module');

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

    const sql = "SELECT * FROM `podcast_audio` WHERE podcaster_id=? ORDER BY `sid` DESC";
    const [results] = await db.query(sql, [req.params.podcaster_id]);
    res.send(results);
});

// 新增單集
router.post('/channel_audio/add/api', uploadAudio.single('audio_file'), async (req, res) => {

    const sql = "INSERT INTO `podcast_audio`( `podcaster_id`, `audio_file`, `audio_title`, `audio_content`, `audio_content_snippet`, `pubDate`) VALUES (?,?,?,?,?,NOW())";

    const { podcaster_id, audio_file, audio_title, audio_content, audio_content_snippet } = { ...req.body };
    const [results] = await db.query(sql, [podcaster_id, req.file.filename, audio_title, audio_content, audio_content_snippet]);

    res.json([req.file, req.body]);
});


// 刪除單集
router.get('/channel_audio/delete/api/:sid?', async (req, res) => {

    const sql = "DELETE FROM `podcast_audio` WHERE `sid`=?";
    const [results] = await db.query(sql, [req.params.sid]);

    res.json([`delete sid=${req.params.sid}`]);
});


// 修改單集
router.post('/channel_audio/edit/api/', uploadAudio.single('audio_file'), async (req, res) => {

    const sql = "UPDATE `podcast_audio` SET `audio_file`=?,`audio_title`=?,`audio_content`=?,`audio_content_snippet`=? WHERE `sid`=?";

    const { audio_file, audio_title, audio_content, audio_content_snippet, sid } = { ...req.body };
    const [results] = await db.query(sql, [audio_file, audio_title, audio_content, audio_content_snippet, sid]);

    res.json([req.body,req.file]);
});


module.exports = router;
