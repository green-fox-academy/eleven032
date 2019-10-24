const express = require('express');
const app = express();
const PORT = 3000

// app.get('/', (request, response => {
//     response.send('Hello EPAM team!')
// }))

app.listen(PORT, () => {
    console.log(`Now listen at ${PORT}`);
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
