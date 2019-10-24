const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Now running at ${PORT}`);
})

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Hello World',
    });
})