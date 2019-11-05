// import promisedQuery from '../utilities/promisedQuery';
const { promisedQuery, reqBodyChecker, idChecker, getNewPost, getItem } = require('../utilities/helperFunctions')
// const getRequestBody = require('../utilities/getRequestBody')
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    let sqlString = `SELECT * FROM posts`;
    try {
        let data = await promisedQuery(sqlString, []);
        let response = {
            "posts": data
        }
        res.send(response);
    } catch (error) {
        res.status(500).send(error);
    }
})


router.post('/', async (req, res) => {
    if (reqBodyChecker(req.body.title, req.body.url)) {
        let sqlString = `INSERT INTO posts (title, url) VALUES (?, ?);`;
        try {
            await promisedQuery(sqlString, [req.body.title, req.body.url]);
            let response = await getNewPost();
            res.status(201).send(response);
        } catch (error) {
            res.status(409).send('Database error at post endpoint');
        }

    } else {
        res.status(400).send('Missing content');
    }
})


router.put('/:id/upvote', async (req, res) => {
    let id = req.params.id;
    if (idChecker(id)) {
        try {
            let data = await getItem(id);
            let score = Number(data[0].score) + 1;

            let sqlString = `UPDATE posts SET score=? WHERE id = ${id};`;
            await promisedQuery(sqlString, [score]);
            data = await getItem(id);
            res.send({
                "id": data[0].id,
                "title": data[0].title,
                "url": data[0].url,
                "timestamp": data[0].timestamp,
                "score": 1
            })
        } catch (error) {
            res.status(409).send('Database error at put up endpoint');
        }
    } else {
        res.status(404).send('Id not found');
    }
})


router.put('/:id/downvote', async (req, res) => {
    let id = req.params.id;
    if (idChecker(id)) {
        try {
            let data = await getItem(id);
            let score = Number(data[0].score) - 1;

            let sqlString = `UPDATE posts SET score=? WHERE id = ${id};`;
            await promisedQuery(sqlString, [score]);
            data = await getItem(id);
            res.send({
                "id": data[0].id,
                "title": data[0].title,
                "url": data[0].url,
                "timestamp": data[0].timestamp,
                "score": -1
            })
        } catch (error) {
            res.status(409).send('Database error at put down endpoint');
        }
    } else {
        res.status(404).send('Id not found');
    }
})

module.exports = router;