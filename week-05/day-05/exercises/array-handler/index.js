const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/arrays', (req, res) => {
    let what = req.body.what;
    let numbers = req.body.numbers;

    if (what && numbers) {
        switch (what) {
            case 'sum':
                let sum = 0;
                for (let i = numbers.length - 1; i >= 0; i--) {
                    sum += numbers[i];
                }
                res.json({
                    result: sum
                })
            case 'multiply':
                let multiply = 1;
                for (var i = 0; i < numbers.length; i++) {
                    multiply = multiply * numbers[i];
                }
                res.json({
                    result: multiply
                })

            case 'double':
                let double = numbers.map(element => {
                    return element * 2
                })
                res.json({
                    result: double
                })
        }
    } else {
        res.json({
            "error": "Please provide what to do with the numbers!"
        })
    }
})



app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});