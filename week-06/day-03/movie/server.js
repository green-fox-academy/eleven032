require('dotenv').config();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;
const server = require('./controller.js');


server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});