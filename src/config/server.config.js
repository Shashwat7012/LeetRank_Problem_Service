const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.PORT); // Log the value of PORT to the console

module.exports = {
    PORT: process.env.PORT
}
