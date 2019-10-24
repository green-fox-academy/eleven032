const express = require('express');
const app = express();
const PORT = 3000;
// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
})

// home page
app.get('/', (req, res) => {
    // render `home.ejs`
    let name = req.query.name ? req.query.name : 'Guest'

    res.render('home',
        { name: name });

});