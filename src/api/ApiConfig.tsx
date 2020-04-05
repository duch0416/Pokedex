const Pokedex = require("pokeapi-js-wrapper");
// const options = {
//   protocol: "https",
//   hostName: "localhost:3000",
//   versionPath: "/api/v2/",
//   cache: true,
//   timeout: 5 * 1000, // 5s
// };
export const pokedex = new Pokedex.Pokedex();
