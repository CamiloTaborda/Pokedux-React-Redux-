import { SET_LOADING, SET_POKEMONS } from "./types"
import { getPokemonDetails } from "../Api";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const getPokemonWithDetails = (pokemons = []) =>
 async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
        pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
    };
