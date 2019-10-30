const port = 3000;
const hostname = 'localhost';
const server = require('./controller.js');



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});