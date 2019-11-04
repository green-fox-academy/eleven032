const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/posts', router);
// app.use('/posts', function (req, res, next) {
//     let contentType = req.headers['content-type'];
//     let accept = req.headers['accept'];
//     // console.log('contentType');
    
//     if (!contentType || contentType.indexOf('application/json') !== 0) {
//         next();
//     } else {
//         return res.status(400).send('Header conflict');
//     }
// });

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})