const fs = require('fs');
const pokemonsFilePath = './data/pokemons.json';

const loadPokemons = () => {
    try {
        const data = fs.readFileSync(pokemonsFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const savePokemons = (pokemons) => {
    fs.writeFileSync(pokemonsFilePath, JSON.stringify(pokemons, null, 2));
};

const getPokemons = () => loadPokemons();

const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));


const createPokemon = (nome, tipo, peso, altura) => {
    const pokemons = loadPokemons();
    const novoPokemon = {
        id: pokemons.length + 1,
        nome,
        tipo,
        peso,
        altura
    };
    pokemons.push(novoPokemon);
    savePokemons(pokemons);
    return novoPokemon;
};

module.exports = { getPokemons, getPokemonById, createPokemon };
