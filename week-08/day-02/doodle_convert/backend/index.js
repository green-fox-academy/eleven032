const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})