const fs = require('fs');
const treinadorFilePath = './data/trainador.json';
const pokemonModel = require('./pokemon');

const loadTreinadores = () => {
    try {
        const data = fs.readFileSync(treinadorFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const saveTreinador = (treinador) => {
    fs.writeFileSync(treinadorFilePath, JSON.stringify(treinador, null, 2));
};

const getTreinador = () => loadTreinadores();

const createTrainador = (nome, pokemonIds) => {
    const treinador = loadTreinadores();
    const novoTreinador = {
        id: treinador.length + 1,
        nome,
        pokemons: pokemonIds.map(id => pokemonModel.getPokemonById(id))
    };
    treinador.push(newTrainer);
    saveTreinador(treinador);
    return novoTreinador;
};

module.exports = { getTreinador, createTrainador };
