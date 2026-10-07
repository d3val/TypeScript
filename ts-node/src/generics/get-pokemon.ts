import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async (pokeID:number) :Promise<Pokemon>=> {
  const res = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
  return res.data;
};
