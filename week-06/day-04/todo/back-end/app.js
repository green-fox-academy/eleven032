require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');

let routes = require('./routes/index');

app.use('/', routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})