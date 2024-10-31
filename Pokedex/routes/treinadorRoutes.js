const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

// Exibir a lista de Treinadores
router.get('/', treinadorController.listTreinadores);

// Exibir o formulário para cadastrar um novo Treinador
router.get('/new', treinadorController.showTreinador);

// Processar o formulário de cadastro de um novo Treinador
router.post('/', treinadorController.createTreinador);

module.exports = router;
