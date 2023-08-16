const Client = require('pg').Client

const dbClient = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'serpro',
    password: 'postgres',
    port: 5432
})

module.exports = dbClient