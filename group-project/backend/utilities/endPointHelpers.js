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

function getAll() {
  return new Promise(async (resolve, reject) => {
    let sqlString = `SELECT * FROM accounts;`;
    try {
      let data = await promisedQuery(sqlString, []);
      let response = [];
      data.forEach(account => {
        let tmp = {
          "id": account.id,
          "depositName": account.depositName,
          "depositAmount": account.depositAmount,
          "userId": account.userId
        }
        response.push(tmp);
      });
      
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = { promisedQuery, getAll };
