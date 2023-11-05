const  mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:"mysql-aristophp.alwaysdata.net",
    user:"aristophp",
    password:"aris2468",
    database:"aristophp_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;