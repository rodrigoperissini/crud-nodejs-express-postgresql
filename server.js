const express = require('express')
const app = express();
const dbClient = require('./db')

const mainPath = '/api'

const produtosController = require('./src/produtos/controller')

dbClient.connect((err) => {
    if(err) throw err;
    console.log('Conected to DB')
    app.listen(3030, () =>{
        console.log('listening on port 3030')
    })
})

app.use(express.json());

app.use(mainPath+'/produtos', produtosController)