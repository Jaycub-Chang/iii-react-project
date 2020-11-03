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
const cors = require('cors');


app.use(cors());

router.get('/', (req, res) => {
    res.send('explore');
});


// 更新整合所有頻道評分
router.get('/update_all_channel_rating', async (req, res) => {

    const sql = "SELECT * FROM `channel_rating` WHERE 1";
    const [results] = await db.query(sql);

    const sql2 = "SELECT `podcaster_id`,`channel_rating` FROM `podcast_channel_info` WHERE 1";
    const [results2] = await db.query(sql2);

    let setBackArray = [];
    async function calculateScore() {
        for (let i = 0; i < results2.length; i++) {
            let eachChannelTotalRating = 0;
            let ratingAmount = 0;
            for (let k = 0; k < results.length; k++) {
                if (results[k].podcaster_id == results2[i].podcaster_id) {
                    eachChannelTotalRating += +results[k].score;
                    ratingAmount++;
                }
            };
            setBackArray.push({
                podcaster_id: results2[i].podcaster_id,
                totalScore: eachChannelTotalRating,
                totalAmount: ratingAmount,
                averageScore: (eachChannelTotalRating / ratingAmount),
            });
        };
    };

    const resultArray = [];
    async function setBackAverageRating() {
        for (let i = 0; i < setBackArray.length; i++) {
            const sql3 = "UPDATE `podcast_channel_info` SET `channel_rating`=? WHERE `podcaster_id`=?";
            const [results3] = await db.query(sql3, [setBackArray[i].averageScore, setBackArray[i].podcaster_id]);
            resultArray.push(results3);
        }
    };

    await calculateScore();
    await setBackAverageRating();

    res.send(resultArray);
});

// 更新整合所有頻道評分
router.get('/popular_channels', async (req, res) => {

    const sql = "SELECT * FROM `podcast_channel_info` ORDER BY `podcast_channel_info`.`channel_rating` DESC LIMIT 10";
    const [results] = await db.query(sql);

    res.send(results);
});


module.exports = router;
