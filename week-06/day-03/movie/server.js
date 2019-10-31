require('dotenv').config();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;
const server = require('./controller.js');

console.log('TEST HERE');

server.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});