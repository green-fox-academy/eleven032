const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;


app.use(express.json());

app.post('/translate', (req, res) => {
    if (req.body.text) {
        let text = req.body.text
        console.log(text);

        let result = text.replace(/a/g, 'ala');
        result = result.replace(/e/g, 'ele');
        result = result.replace(/i/g, 'ili');
        result = result.replace(/o/g, 'olo');
        result = result.replace(/u/g, 'ulu');

        res.json({
            translated: result,
            lang: "gibberish"
        })
    } else {
        res.json({
            error: "I can't translate that!"
        })
    }
})

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});