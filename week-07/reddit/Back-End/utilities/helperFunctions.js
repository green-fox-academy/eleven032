const connection = require('../db/connection');

function promisedQuery(sqlString, queryInput) {
    return new Promise((resolve, reject) => {
        connection.query(sqlString, queryInput, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    })
}

function reqBodyChecker(...params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] === undefined) {
            return false;
        }
    }
    return true;
}

async function idChecker(id) {
    let queryInput = [id];
    let sqlString = `select * from posts where id = ?;`;
    let data = await promisedQuery(sqlString, queryInput);
    if (data.length == 0) {
        return false;
    } else {
        return true;
    }
}

function getNewPostHelper() {
    return new Promise((resolve, reject) => {
        connection.query("select * from posts order by id DESC limit 1;", [], (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    })
}

async function getNewPost() {
    let data = await getNewPostHelper();
    // console.log(data);
    let response = {
        "id": data[0].id,
        "title": data[0].title,
        "url": data[0].url,
        "timestamp": data[0].timestamp,
        "score": data[0].score
    }
    // console.log(response);

    return response;
}

function getItem(id) {
    return new Promise((resolve, reject) => {
        connection.query(`select * from posts where id = ${id};`, [], (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    })
}
module.exports = { promisedQuery, reqBodyChecker, idChecker, getNewPost, getItem };