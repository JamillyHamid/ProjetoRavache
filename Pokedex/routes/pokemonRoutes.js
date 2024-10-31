const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Exibir a lista de Pokémons
router.get('/', pokemonController.createPokemon);

// Exibir o formulário para cadastrar um novo Pokémon
router.get('/new', pokemonController.showPokemonForm);

// Processar o formulário de cadastro de um novo Pokémon
router.post('/', pokemonController.createPokemon);

router.get('/pokemons/:id', pokemonController.getPokemonById);

module.exports = router;
