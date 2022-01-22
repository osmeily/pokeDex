import types from "../types/types";

export const reducerPokemon = (state={}, action) => {
    switch (action.type) {
        case types.selectedPokemon:
            return {
                selectedPokemon: action.payload.id
            }
        case types.searchPokemon:
            return {
                searchPokemon: action.payload.name
            }
        default:
            return state
    }
}


