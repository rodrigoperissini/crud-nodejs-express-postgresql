const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const { Client } = require('pg')
app.set('client', new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'serpro',
    password: 'postgres',
    port: 5432
}))
const mainPath = '/api'

const produtosRoutes = require('./routes/produtos')

app.get('client').connect((err) => {
    if(err) throw err;
    console.log('Conected to DB')
    app.listen(3030, () =>{
        console.log('listening on port 3030')
    })
})

app.use(bodyParser.json())

app.use(mainPath+'/produtos', produtosRoutes)