import { SET_LOADING, SET_POKEMONS } from "../Actions/types";

const initialState = {
    pokemons: [],
    laoding: false,
};

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: action.payload };
            case SET_LOADING:
                return { ...state, laoding: action.payload };
            default:
                return state;
    }
};