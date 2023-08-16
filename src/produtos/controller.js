const express = require('express')
const router = express.Router()
const queries = require('./queries')
const dbClient = require('../../db')

//create
router.post('/', (req,res) => {
    const body = req.body
    dbClient.query(queries.createProduto, [body.nome, body.quantidade], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json({success_message: `Produto criado com ID: ${results.rows[0].id}`})
        })
})

//list
router.get('/', (req,res) => {
    const body = req.body
    dbClient.query(queries.listProduto, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
        })
})

//find
router.get('/:id', (req,res) => {
    const id = req.params.id
    dbClient.query(queries.findProdutoById, [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

//delete
router.delete('/:id', (req,res) => {
    const id = req.params.id
    dbClient.query(queries.deleteProduto, [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json({success_message: `Produto de ID ${id} excluído!`})
        })
})

//update
router.patch('/:id', (req,res) => {
    const id = req.params.id
    const body = req.body
    dbClient.query(queries.updateProduto, [body.nome, body.quantidade, id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json({success_message: `Produto de ID ${id} atualizado!`})
        })
})


module.exports = router