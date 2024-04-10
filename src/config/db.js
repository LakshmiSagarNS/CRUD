const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'obsrv',
    password:'sagar12',
    port:5432,
    
});
module.exports = pool;
console.log("db connected");