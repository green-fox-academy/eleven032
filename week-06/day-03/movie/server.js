require('dotenv').config();
const PORT = process.env.PORT;
const hostname = 'localhost';
const server = require('./controller.js');



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});