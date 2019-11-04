const express = require('express');
const router = express.Router();
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
            res.statusCode = 400;
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

router.delete('/api/todos/:id', async (req, res) => {
    let queryInput = [req.params.id];
    // console.log(await idCheck(queryInput[0]));
    if (await idCheck(queryInput[0])) {
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });
        let sqlString = `DELETE FROM todoList WHERE id = ?;`
        promisedQuery(sqlString, queryInput);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end('Deleted item');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end('Id does not exist!');
    }
})

router.put('/api/todos/:id', async (req, res) => {
    let id = req.params.id;
    if (await idCheck(id)) {
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', async function () {
            let postBody = JSON.parse(body);
            if (postBody.text === undefined) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end('Text missing!');
            } else {
                let queryInput = [
                    postBody.text,
                    postBody.done === 'true' ? true : false,
                    id
                ];
                let sqlString = `UPDATE todoList SET text=?, done=? WHERE id = ?;`;
                promisedQuery(sqlString, queryInput);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end('Update successful');
            }

        })
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end('Id does not exist!');
    }
})

async function idCheck(id) {
    let queryInput = [id];
    let sqlString = `select * from todoList where id = ?;`;
    let data = await promisedQuery(sqlString, queryInput);
    if (data.length == 0) {
        return false;
    } else {
        return true;
    }
}


module.exports = router;