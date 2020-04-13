const Pokedex = require("pokeapi-js-wrapper");

const options = {
    protocol: 'https',
    hostName: 'localhost:443',
    versionPath: '/api/v2/',
    cache: true,
  }

export const pokedex = new Pokedex.Pokedex();
