const mysql = require('mysql2')

require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: "root",
    password: "",
    database: process.env.DB_NAME,
    
});


connection.connect((err) => {
    if (err) {
        console.log("Problem is database connection")
    } else {
        console.log("Database connected")

    }
});

module.exports = connection;