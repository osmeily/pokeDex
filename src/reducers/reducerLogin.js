import types from "../types/types";

export const reducerLogin = (state={}, action) => {

    switch (action.type) {
        case types.login:
            return {
                user : action.payload.user,
                pass : action.payload.pass
            }
        case types.logout: 
            return action.payload
        default:
            return state
    }
}