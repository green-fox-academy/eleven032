const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.json());

const words = [' Arrgh.', ' Uhmm.', ' Err..err.', ' err.']

function reverse(param) {

    let list = param.split(" ");

    // console.log(list);
    if (list.length !== 1) {
        for (let i = 0; i < list.length - 1; i += 2) {
            if (list[i + 1]) {
                let tmp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = tmp
            }
        }
        list[0] = list[0].toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
        list[1] = list[1].toLowerCase();
        let result = list.join(" ");
        let end = result.length % words.length
        let final = new Array();
        final.push(result);
        final.push(words[end]);
        let final_result = final.join('.')
        return final_result;
    } else {
        return param;
    }

}
app.post('/sith', (req, res) => {
    let list = req.body.text.split('.');
    let result = new Array();
    for (let i = 0; i < list.length; i++) {
        result.push(reverse(list[i]));
    }
    let string = result.join('');
    console.log(string);
    res.json({
        sith_text: string
    })
})


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});