import { Pokemon } from "./decorators/pokemon-class";
import { getPokemon } from "./generics/get-pokemon";

getPokemon(51).then(pokemon => console.log(pokemon.name))
.catch(e=>console.error(e));

const charmander = new Pokemon('Charmander');
console.log(charmander);


console.log(charmander.savePokemonToDB(50));
console.log(charmander.savePokemonToDB(-50));