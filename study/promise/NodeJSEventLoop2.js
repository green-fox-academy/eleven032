const fs = require('fs')

const startTime = Date.now();
setTimeout(() => {
    const endTime = Date.now()
    console.log(`timers: ${endTime - startTime}`)
}, 1000)

const readFileStart =  Date.now();
//suppose the readFile need 9s
fs.readFile('./Demo.txt', (err, data) => {
    if (err) throw err
    let endTime = Date.now()
    console.log(`read time: ${endTime - readFileStart}`)
    while(endTime - readFileStart < 5000){
        endTime = Date.now()
    }

})

setImmediate(() => {
    console.log('check阶段')
})
