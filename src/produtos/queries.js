const deleteProduto = 'DELETE FROM PRODUTOS WHERE id=$1';
const updateProduto = 'UPDATE produtos SET nome = $1, quantidade = $2 WHERE id = $3';
const findProdutoById = 'SELECT * FROM PRODUTOS WHERE id=$1';
const listProduto = 'SELECT * FROM PRODUTOS';
const createProduto = 'INSERT INTO produtos (nome, quantidade) VALUES ($1, $2) RETURNING *'

module.exports = {
    deleteProduto,
    updateProduto,
    findProdutoById,
    listProduto,
    createProduto
}