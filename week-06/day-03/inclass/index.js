const http = require('http');

let server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200;
        res.write('first response');
        res.end();
    } else {
        res.statusCode = 404;
        res.write('first response');
        res.end();
    }
});



server.listen(3000, () => {
    console.log('server start at port 3000');

})