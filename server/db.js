require('dotenv').config()
const mysql = require('mysql')

console.log(process.env.DB_HOST)
const openDbConnection = () =>{
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
        port: process.env.port,
    })
    connection.connect()

    return connection
}

module.exports = {
    connection : openDbConnection,
}


