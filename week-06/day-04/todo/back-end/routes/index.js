const express = require('express');
const router = express.Router();
const Todo = require('./Todo');
const mysql = require('mysql');
const connection = require('../public/db');

let promisedQuery = (sqlString, queryInput) =>
    new Promise((resolve, reject) => {
        connection.query(sqlString, queryInput, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });

router.get('/', (req, res) => {
    res.send('Here at home page');
});

router.get('/api/todos', async (req, res) => {
    let queryInput = req.query;
    let sqlString = `SELECT * FROM todoList`;
    try {
        let data = await promisedQuery(sqlString, queryInput);
        console.log(data);

        let response = {
            "todo": data
        }
        res.end(JSON.stringify(response));
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/api/todos', async (req, res) => {
    let body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        postBody = JSON.parse(body);
        if (postBody.text === undefined) {
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end('Text missing!');
        } else {
            let queryInput = [
                Number(postBody.id),
                postBody.text,
                postBody.done === 'true' ? true : false
            ];
            let sqlString = `INSERT INTO todoList (id, text, done) VALUES (?, ?, ?)`;
            promisedQuery(sqlString, queryInput);

            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                id: Number(postBody.id),
                text: postBody.text,
                done: postBody.done === 'true' ? true : false
            }));
        }

    });
})

router.delete('/api/todos/:id', (req, res) => {
    let queryInput = [req.params.id];
    let sqlString = `DELETE FROM todoList WHERE id = ?;`
    promisedQuery(sqlString, queryInput);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Check now');
})

router.put('/api/todos/:id', async (req, res) => {
    let queryInput = [Number(req.params.id)];
    let sqlString = `UPDATE todoList SET  WHERE id = ?;`
    promisedQuery(sqlString, queryInput);
    // console.log(result);
    res.statusCode = 200;
})

module.exports = router;