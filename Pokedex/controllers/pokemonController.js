const pokemonModel = require('../models/pokemon');

const getAllPokemons = (req, res) => {
    const pokemon = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if(pokemon) {
        req.render('pokemon', { pokemon });
    } else {
        res.status(484).send('Pokemon não encontrado');
    }
};

const listPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('listapokemon', { pokemons });
};

const showPokemonForm = (req, res) => {
    res.render('pokemon');
};

const createPokemon = (req, res) => {
    const { nome, tipo, peso, altura } = req.body;
    pokemonModel.createPokemon(nome, tipo, peso, altura);
    res.redirect('/pokemon');
};

const getPokemonById = (req, res) => {
    const id = req.params.id; // Obtém o ID do Pokémon da URL
    const pokemon = getPokemonById(id); // Obtenha o Pokémon usando a função do model
    
    if (pokemon) {
        res.render('pokemon', { pokemon }); // Passa o objeto pokemon para a view
    } else {
        res.status(404).send('Pokémon não encontrado');
    }
};

module.exports = { getAllPokemons, getPokemon, listPokemons, showPokemonForm, createPokemon, getPokemonById };
