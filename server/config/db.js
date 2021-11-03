const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "*Jon002015",
    database: "devdotcom",
});

module.exports = db;