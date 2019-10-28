# Node.js and MySQL

Purpose of this module is to introduce students to working with databases server side. 

## Prerequisites

 - Knowing SQL basics
 - Implementing REST endpoints

## Materials
| Material | Time |
|:---------|-----:|
| [How to Connect to MySQL Database from Node.Js](https://www.youtube.com/watch?v=XuLRKMqozwA) | 13:33 |
| [Using node mysql JavaScript client](https://www.sitepoint.com/using-node-mysql-javascript-client/) (you can ignore the grunt part and advanced use is not needed) | 29.9 min |

## Docs for today's library
https://github.com/mysqljs/mysql

## Material review
- MySQL server
- Connection
   - Required fields
- Executing queries
- Sync or async?

### Package features: `mysql`

- `.createConnection`
- `.connect`
- `.end`
- `.query`

## Workshop

### Connect to database
```JavaScript
let mysql = require('mysql');

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'jaj',
  password: 'alma',
  database: 'myDBname',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.end();
```


### Querying a database
```JavaScript
conn.query('SELECT * FROM table_name;', function(err, rows) {
  console.log('Data received from Db:\n');
  console.log(rows);
});
```

### Error handling
```JavaScript
conn.query('SELECT * FROM table_name;', function(err, rows) {
  if (err) {
    console.log(err.toString());
  }

  console.log('Data received from Db:\n');
  console.log(rows);
});
```

### MySQL and Express
```JavaScript
let app = express();

app.get('/', function(req, res) {
  conn.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});
```

## Exercises

 - [Bookstore endpoints](bookstore/README.md)
 - [Import user data](import/README.md)
