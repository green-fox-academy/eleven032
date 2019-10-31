require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;
let count = 0;

app.get('/greeting', (req, res) => {
    let name = req.query.name;
    count++;
    res.send(JSON.stringify({
        "greetCounter": count,
        "content": `Hello, ${name}!`
    }))
})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});