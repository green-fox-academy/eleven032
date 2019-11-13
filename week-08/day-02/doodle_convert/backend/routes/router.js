const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

function promisedQuery(sqlString, queryInput) {
    return new Promise((resolve, reject) => {
        connection.query(sqlString, queryInput, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    })
}

router.get('/native', async (req,res)=>{
    let sqlString = `select style from native_use;`;
    try {
        let data = await promisedQuery(sqlString, []);
        res.send(data);
    } catch (e){
        res.status(444).send(e);
    }
})

// router.get('/native/:id', async (req, res) => {
//     let id = req.params.id;
//     let sqlString = `select`;
//   try {
//     let response = await getPoll();
//     res.send(response)
//   } catch (error) {
//     res.status(444).send(error);
//   }
// })

// router.put('/vote/:optionId', async (req, res) => {
//   let id = req.params.optionId;
//   let style = 'Italian';
//   if (id == 2) {
//     style = 'Mexican';
//   }
//   let sqlString = `insert into poll (style) values (?);`;
//   try {
//     await promisedQuery(sqlString, [style]);

//     let response = await getPoll();

//     res.send(response);
//   } catch (error) {
//     res.status(444).send(error);
//   }
// })

module.exports = router;