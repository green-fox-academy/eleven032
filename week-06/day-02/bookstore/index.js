require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const PORT = 3000;
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

let promisedQuery = (sqlString, queryInput) =>
    new Promise((resolve, reject) => {
        connection.query(sqlString, queryInput, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });

app.get('/', async (req, res) => {
    let queryInput = req.query;
    let sqlString = `SELECT book_name FROM book_mast`;

    try {
        let data = await promisedQuery(sqlString, queryInput);
        res.render('index',
            {
                data: data,
                bookName: "Book Name"
            });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/', async (req, res) => {
    let queryInput = req.query;
    let sqlString = `SELECT book_name FROM book_mast`;

    try {
        let data = await promisedQuery(sqlString, queryInput);
        res.render('index',
            {
                data: data,
                bookName: "Book Name"
            });
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get('/detail', async (req, res) => {
    let queryInput = req.query;
    let sqlString = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price \
    FROM book_mast,author,category,publisher WHERE book_mast.aut_id = author.aut_id and book_mast.cate_id= category.cate_id and book_mast.pub_id=publisher.pub_id`;

    sqlString = await helper(queryInput, sqlString);

    try {
        let data = await promisedQuery(sqlString, queryInput);
        res.render('detail',
            {
                data: data,
                bookName: "Book Detail"
            });
    } catch (error) {
        res.status(500).send(error);
    }
});

async function helper(queryInput, sqlString) {
    if (Object.keys(queryInput).length > 0) {
        for (let key in queryInput) {
            if (key === 'category') {
                sqlString += ` and category.cate_descrip='${queryInput[key]}'`;
            } else if (key === 'publisher') {
                sqlString += ` and publisher.pub_name='${queryInput[key]}'`;
            } else if (key === 'plt') {
                sqlString += ` and book_mast.book_price<'${queryInput[key]}'`;
            } else if (key === 'pgt') {
                sqlString += ` and book_mast.book_price>'${queryInput[key]}'`;
            }
        }
        return sqlString += ';';
    }
}
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});