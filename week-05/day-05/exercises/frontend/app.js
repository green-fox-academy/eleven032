const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));
// app.use(bodyParser);
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    let input = req.query.input;
    if (input) {
        res.json({
            received: input,
            result: input * 2
        })
    } else {
        res.send({
            error: "Please provide an input!"
        })
    }
});

app.get('/greeter', (req, res) => {
    const { name, title } = req.query;
    if (name !== undefined && title !== undefined) {
        res.json({
            'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
        });
    } else if (name !== undefined) {
        res.json({
            'error': 'Please provide a title!'
        });
    } else if (title !== undefined) {
        res.json({
            'error': 'Please provide a name!'
        });
    } else {
        res.json({
            'error': 'Please provide a name and a title!'
        });
    }
});

app.get('/appenda/:appendable', (req, res) => {
    let appendable = req.params.appendable;
    if (appendable) {
        res.json({
            appended: appendable + 'a'
        })
    } else {
        res.status(404).send('Not found');
    }
})

app.post('/dountil/:action', (req, res) => {
    let num = req.body.until;
    let action = req.params.action;
    console.log(num, action);

    if (num) {
        let result = 0;
        if (action === 'sum') {
            for (let i = 1; i <= num; i++) {
                result += i;
            }
        } else {
            result = 1;
            for (let i = 1; i <= num; i++) {
                result *= i;
            }
        }
        res.json({
            result: result
        })
    } else {
        res.json({
            error: "Please provide a number!"
        })
    }

})









app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
})