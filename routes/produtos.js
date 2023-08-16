const express = require('express')
const router = express.Router()


//create
router.post('/', (req,res) => {
    const body = req.body
    req.app.get('client').query('INSERT INTO produtos (nome, quantidade) VALUES ($1, $2) RETURNING *', [body.nome, body.quantidade], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json({success_message: `Produto criado com ID: ${results.rows[0].id}`})
        })
})

//list
router.get('/', (req,res) => {
    const body = req.body
    req.app.get('client').query('SELECT * FROM PRODUTOS', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
        })
})

//find
router.get('/:id', (req,res) => {
    const id = req.params.id
    req.app.get('client').query('SELECT * FROM PRODUTOS WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

//delete
router.delete('/:id', (req,res) => {
    const id = req.params.id
    req.app.get('client').query('DELETE FROM PRODUTOS WHERE id=$1', [id], (error, results) => {
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
    req.app.get('client').query('UPDATE produtos SET nome = $1, quantidade = $2 WHERE id = $3', [body.nome, body.quantidade, id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json({success_message: `Produto de ID ${id} atualizado!`})
        })
})


module.exports = router