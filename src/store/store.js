import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducerLogin } from "../reducers/reducerLogin";
import { reducerRegister } from "../reducers/reducerRegister";
import thunk from "redux-thunk"
import { reducerPokemon } from "../reducers/reducerPokemon";

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: reducerLogin,
    register: reducerRegister,
    pokemon: reducerPokemon
})

export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))

)