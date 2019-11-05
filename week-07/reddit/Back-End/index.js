const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const PORT = process.env.PORT;
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/posts', router);


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})