const pg = require('pg')

require('dotenv').config()

const client = new pg.Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
})

client.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('aws postgre connected')
    }
})

module.exports = client