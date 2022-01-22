import types from "../types/types";

export const actionPokemon = (id) => {
    return{
        type: types.selectedPokemon,
        payload: {
            id
        }
    }
}

export const SearchPokemon = (name) => {
    return {
        type: types.searchPokemon,
        payload:{ 
            name
        }
    }
}


