
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '/test.txt');

function promiseTest(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      err ? reject(err) : resolve(data.toJSON());
    })
  })
}

promiseTest(dirPath).then((data) => {
  console.log(data.data.length);
});
