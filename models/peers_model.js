const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: process.env.database_host,
    port: process.env.database_port,
    user: process.env.database_user,
    password: process.env.database_password,
    database: process.env.database_name
});

module.exports.testData = () => {
    const queryPromise = new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM test',
            (err, results, fields) => {
                if (err) reject(err);
                else resolve(results);
            }
        )
    })

    return queryPromise;
}
    