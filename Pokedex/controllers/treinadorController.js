const treinadorModel = require('../models/treinador');
const pokemonModel = require('../models/pokemon');

const listTreinadores = (req, res) => {
    const trainers = treinadorModel.getTreinador();
    res.render('treinadoresList', { trainers });
};

const showTreinador = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('treinadorForm', { pokemons });
};

const createTreinador = (req, res) => {
    const { nome, pokemonIds } = req.body;
    treinadorModel.createTreinador(nome, pokemonIds.map(id => parseInt(id)));
    res.redirect('/trainador');
};

module.exports = { listTreinadores, showTreinador, createTreinador };
