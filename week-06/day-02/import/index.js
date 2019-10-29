require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const PORT = 3000;
const app = express();
app.use(express.json());
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

app.get('/import', async (req, res) => {
    try {
        let data = await readCSV('users.csv');
        let table = await convertToTable(data);

        let message = importMysql(table);
        res.status(200).send(message);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get('/compare', async (req, res) => {
    try {
        let dataFromCSV = await readCSV('users.csv');
        let tableFromCSV = await convertToTable(dataFromCSV);
        // console.log(tableFromCSV);
        let dataFromMysql = await exportMysql('users');
        let i = 1;
        dataFromMysql.forEach(row => {

            if (row.id != tableFromCSV[i][0] || row.prefix != tableFromCSV[i][1]
                || row.first_name != tableFromCSV[i][2] || row.last_name != tableFromCSV[i][3]
                || row.address != tableFromCSV[i][4] || row.height != tableFromCSV[i][5]
                || row.bitcoin_address != tableFromCSV[i][6] || row.color_preference != tableFromCSV[i][7]) {
                res.status(200).send('Not same!')
            }
            i++;
        })


        res.status(200).send('ok');
    } catch (error) {
        res.status(500).send(error);
    }
})

async function exportMysql(table) {
    return new Promise((resolve, reject) => {
        connection.connect(function (err) {
            if (err) {
                reject(err);
            }

            connection.query(`SELECT * FROM ${table}`, function (err, result, fields) {
                if (err) reject(err);
                resolve(result);
            });
        });
    })

}

function importMysql(table) {
    connection.connect((error) => {
        if (error) {
            return "error at import method";
        }

        let createUsers = `create table if not exists users(
            id varchar(255) not null,
            prefix varchar(255),
            first_name varchar(255),
            last_name varchar(255),
            address varchar(255),
            height varchar(255),
            bitcoin_address varchar(255),
            color_preference varchar(255),
            primary key (id)
        )`;

        connection.query(createUsers, function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
        });
        for (let i = 1; i < table.length; i++) {
            let sql = `INSERT INTO users VALUES ("${table[i][0]}", "${table[i][1]}", "${table[i][2]}", "${table[i][3]}", "${table[i][4]}", "${table[i][5]}", "${table[i][6]}", "${table[i][7]}");`;
            connection.query(sql, function (err, results, fields) {
                if (err) {
                    console.log(err.message);
                }
            })
        }
        return "all imported"
    })
}
function readCSV(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function read(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}


async function convertToTable(data) {

    data = data.toString();
    var table = new Array();
    var rows = new Array();
    rows = data.split("\r\n");
    for (var i = 0; i < rows.length; i++) {
        table.push(rows[i].split(","));
    }


    return table;
}


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});